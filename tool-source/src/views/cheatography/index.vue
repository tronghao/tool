<template>
  <div>
    <h4 class="text-center mb-4">Tool gen Cheatography - Cheat sheet</h4>
    <hr />
    <div class="mt-4">
      <el-row class="mt-4" :gutter="20">
        <el-col :span="12">
          <div class="mt-4">Input:</div>
          <div class="my-5">
            <el-input
              v-model="form.content"
              :autosize="{ minRows: 10, maxRows: 10 }"
              type="textarea"
              placeholder="Please input"
            />
          </div>
        </el-col>
        <el-col :span="12">
          <div class="mt-4">Result:</div>
          <div class="my-5">
            <el-input
              v-model="data"
              :autosize="{ minRows: 10, maxRows: 10 }"
              type="textarea"
              placeholder="Please input"
              :readonly="true"
            />
          </div>
        </el-col>
      </el-row>

      <el-button type="primary" class="bg-[#409eff] my-3" @click="genText()"
        >Gen text</el-button
      >
      <el-button type="primary" class="bg-[#409eff] my-3" @click="genText(true)"
        >Gen text Reverse</el-button
      >
      <div>
        {{ example }}
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";

export default {
  setup() {
    const state = reactive({
      form: {
        content: "",
      },
      data: "",
      example: `Ex:
      - Connect on-premise and cloud{{nl}}- Type:{{nl}} + File gateway{{nl}} + Volumn gateway{{nl}} + Tape gateway`,
    });

    /**
     * genText gen text
     * @author HaoDT
     */
    const genText = (reverse = false) => {
      let contentMulti = state.form.content;
      let result = "";
      if (reverse) {
        contentMulti.split("{{nl}}").forEach((content, index) => {
          if (index === contentMulti.split("{{nl}}").length - 1) {
            result += content;
          } else {
            result += `${content}\n`;
          }
        });
      } else {
        contentMulti.split("\n").forEach((content, index) => {
          if (index === contentMulti.split("\n").length - 1) {
            result += content;
          } else {
            result += `${content}{{nl}}`;
          }
        });
      }

      state.data = result;
    };

    return {
      ...toRefs(state),
      genText,
    };
  },
};
</script>
