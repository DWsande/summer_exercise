<template>
  <div>
    <el-row>
      <el-col :span="10">
        <div class="demo">
          <el-upload
            class="demoload"
            drag
            action="https://jsonplaceholder.typicode.com/posts/"
            multiple
          >
            <i class="el-icon-upload"></i>
            <div class="el-upload__text" style="border: ">
              将文件拖到此处，或
              <em>点击上传</em>
            </div>
          </el-upload>
        </div>
      </el-col>
      <el-col :span="10">
        <el-input
          style="padding:20px;width:50%"
          type="text"
          placeholder
          v-model="title"
          maxlength="20"
          show-word-limit
        >
          <template slot="prepend">Title</template>
        </el-input>
        <el-input
          style="padding:20px;font-size:20px;text-indent:25px"
          clearable
          type="textarea"
          :autosize="{ minRows: 8, maxRows: 22}"
          placeholder="请上传图片"
          v-model="textarea"
        ></el-input>
        <el-button class="button" @click type="success" plain>保存</el-button>
        <el-button class="button" type="danger" plain>重置</el-button>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "upload_composition",
  data() {
    return {
      fileList: [],
      title: "",
      textarea: "1231231231"
    };
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    }
  }
};
</script>

<style scoped>
.button {
  margin: 20px;
}
.demo {
  /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04); */
}
.demoload {
  width: 340px;
  margin-left: 20%;
  margin-top: 100px;
  /* min-height: 350px; */
}
.domeload .el-upload .el-upload-dragger {
  /* background-color: #fff; */
  /* border: 1px dashed #d9d9d9; */
  border-radius: 6px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  width: 360px;
  height: 180px;
  text-align: center;
  position: relative;
  overflow: hidden;
}
</style>
