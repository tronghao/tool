<template>
  <div>
    <h4 class="text-center mb-4">Tool Translate</h4>
    <hr />
    <div class="mt-4">
      <el-row class="mt-4" :gutter="20">
        <el-col :span="12">
          <el-button
            type="primary"
            class="bg-[#409eff] my-3"
            @click="getSample()"
            >Get Sample</el-button
          ><br />
          <el-radio-group v-model="form.format">
            <el-radio :label="1">Template</el-radio>
            <el-radio :label="2">JS</el-radio>
          </el-radio-group>
        </el-col>
        <el-col :span="12">
          <div class="mt-4">File name:</div>
          <el-input
            v-model="form.fileName"
            class="max-w-[50%]"
            :placeholder="sample.fileName"
          ></el-input>
        </el-col>
      </el-row>

      <el-row class="mt-4" :gutter="20">
        <el-col :span="6">
          <div>Text JP</div>
          <el-input
            v-model="form.textJP"
            :autosize="{ minRows: 10, maxRows: 10 }"
            type="textarea"
            :placeholder="sample.textJP"
          />
        </el-col>
        <el-col :span="6">
          <div>Text translate</div>
          <el-input
            v-model="form.textTranslate"
            :autosize="{ minRows: 10, maxRows: 10 }"
            type="textarea"
            :placeholder="sample.textTranslate"
          />
        </el-col>
        <el-col :span="12">
          <div>Array PHP</div>
          <el-input
            v-model="form.arrayPHP"
            :autosize="{ minRows: 10, maxRows: 10 }"
            type="textarea"
            placeholder="Please input"
          />
        </el-col>
      </el-row>

      <el-button type="primary" class="bg-[#409eff] my-3" @click="genPHPArray()"
        >Gen array PHP</el-button
      >
      <el-row :gutter="20">
        <el-col :span="12">
          <div>Code</div>
          <el-input
            v-model="form.code"
            :autosize="{ minRows: 10, maxRows: 10 }"
            type="textarea"
            :placeholder="sample.code"
          />
        </el-col>
        <el-col :span="12">
          <div>Result</div>
          <el-input
            v-model="form.result"
            :autosize="{ minRows: 10, maxRows: 10 }"
            type="textarea"
            placeholder="Please input"
            readonly
          />
        </el-col>
      </el-row>

      <el-button
        type="primary"
        class="bg-[#409eff] my-3"
        @click="handleTranslate()"
        >Translate</el-button
      >
      <el-button
        type="primary"
        class="bg-[#409eff] my-3"
        @click="
          genPHPArray();
          handleTranslate();
        "
        >Gen Array PHP & Translate</el-button
      >
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      form: {
        fileName: "",
        textJP: "",
        textTranslate: "",
        arrayPHP: "",
        code: "",
        result: "",
        format: 1,
      },
      data: "",
      sample: {
        fileName: "supplier.banner",
        textJP: `商談スケジュール
個別設定`,
        textTranslate: `Negotiation schedule
individual setting`,
        code: `<div>商談スケジュール</div>
<span>個別設定</span>`,
      },
    });

    /**
     * translate translate language for code
     * @author HaoDT
     */
    const handleTranslate = async () => {
      let result = state.form.code;
      let arrayPHPSplit = state.form.arrayPHP.split("\n");
      arrayPHPSplit.forEach((content, index) => {
        if (index !== 0 && index !== arrayPHPSplit.length - 1) {
          let rowSplit = content.split("=>");
          const txtTranslate = removeGetText(rowSplit[0]);
          const txtJP = removeGetText(rowSplit[1]);
          if (state.form.format === 1) {
            result = result.replaceAll(
              `placeholder="${txtJP}"`,
              `:placeholder="$t('${state.form.fileName}.${txtTranslate}')"`
            );
            result = result.replaceAll(
              `label="${txtJP}"`,
              `:label="$t('${state.form.fileName}.${txtTranslate}')"`
            );
          }
          result = result.replaceAll(
            state.form.format === 1 ? txtJP : `'${txtJP}'`,
            state.form.format === 1
              ? `{{ $t('${state.form.fileName}.${txtTranslate}') }}`
              : `t('${state.form.fileName}.${txtTranslate}')`
          );
        }
      });

      if (state.form.format !== 1) {
        arrayPHPSplit.forEach((content, index) => {
          if (index !== 0 && index !== arrayPHPSplit.length - 1) {
            let rowSplit = content.split("=>");
            const txtTranslate = removeGetText(rowSplit[0]);
            const txtJP = removeGetText(rowSplit[1]);
            result = result.replaceAll(
              txtJP,
              `{t('${state.form.fileName}.${txtTranslate}')}`
            );
          }
        });
      }
      state.form.result = result;
    };

    /**
     * removeGetText remove get text
     * @author HaoDT
     */
    const removeGetText = (text) => {
      return text.trim().replaceAll(`',`, "").replaceAll(`'`, "");
    };

    /**
     * genPHPArray gen PHP array
     * @author HaoDT
     */
    const genPHPArray = () => {
      let result = `[\n`;
      let textJPSplit = state.form.textJP.split("\n");
      let textTranslateSplit = state.form.textTranslate.split("\n");
      textJPSplit.forEach((content, index) => {
        result += `'${textTranslateSplit[index]
          .replaceAll(" ", "_")
          .replaceAll("/", "_")
          .replaceAll("_(", "_")
          .replaceAll("(", "_")
          .replaceAll(")", "")
          .replaceAll("'", "")
          .replaceAll("-", "_")
          .toLowerCase()}' => '${content}',\n`;
      });
      result += `]`;
      state.form.arrayPHP = result;
    };

    /**
     * getSample get sample
     * @author HaoDT
     */
    const getSample = () => {
      state.form.textJP = state.sample.textJP;
      state.form.textTranslate = state.sample.textTranslate;
      state.form.code = state.sample.code;
      state.form.fileName = state.sample.fileName;
    };

    return {
      ...toRefs(state),
      handleTranslate,
      genPHPArray,
      getSample,
    };
  },
};
</script>
