<template>
  <div>
    <h4 class="text-center mb-4">Tool gen Memrise App</h4>
    <hr />
    <div class="mt-4">
      <el-input
        v-model="form.content"
        :autosize="{ minRows: 10, maxRows: 10 }"
        type="textarea"
        placeholder="Please input"
      />
      <el-button type="primary" class="bg-[#409eff] my-3" @click="genText()"
        >Gen text</el-button
      >
      <div class="my-5">
        <el-input
          v-model="data"
          :autosize="{ minRows: 10, maxRows: 10 }"
          type="textarea"
          placeholder="Please input"
          :readonly="true"
        />
      </div>
      <div>
        {{
          `Ví dụ: Dưới vùng Đông Nam Bộ là Tây Nam Bộ hay còn gọi là <Đồng bằng>
        sông Cửu Long`
        }}
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
    });

    /**
     * genText gen text
     * @author HaoDT
     */
    const genText = () => {
      let contentMulti = state.form.content;
      let result = "";
      contentMulti.split("\n").forEach((content) => {
        let contentSplit = content.split("<");
        contentSplit.forEach((item, index) => {
          if (index !== 0) {
            let contentResult = content;
            contentResult = contentResult.replaceAll("<", "");
            contentResult = contentResult.replaceAll(">", "");
            contentResult = contentResult.replace(item.split(">")[0], "...");
            result += contentResult + " \t" + item.split(">")[0] + "\n";
          }
        });
      });

      state.data = result;
    };

    return {
      ...toRefs(state),
      genText,
    };
  },
};
</script>
