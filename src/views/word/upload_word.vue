<template>
  <el-tabs v-model="activeName" type="card">

    <el-tab-pane label="execel上传" name="first">
        <el-upload
          class="upload-demo"
          ref="upload"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :on-success="successInform"
          :on-error="errorInform"
          :before-upload="beforeAvatarUpload"
          :auto-upload="false"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击选择</em></div>
          <div class="el-upload__tip"  slot="tip">上传excel文件</div>
          <div class="upload_button"  slot="tip"><el-button  size="small" type="success" @click="submitUpload">上传</el-button></div>
        </el-upload>
        <!--<el-button class="upload_button"  size="small" type="success" @click="submitUpload">上传</el-button>-->

    </el-tab-pane>

    <el-tab-pane label="词库选择" name="second">

    </el-tab-pane>

  </el-tabs>
</template>

<script>
    export default {
        name: "upload_word",
      data() {
        return {
          activeName: 'first'
        };
      },
      methods:{
        submitUpload() {
          this.$refs.upload.submit();
        },
        beforeAvatarUpload(file) {
          console.log(file.name)
          let s = file.name.split('.')
          const isExcel = s[1] === "xlsx"
          if(!isExcel){
            this.$message.error('上传文件只能是excel!');
          }
          return isExcel
          // if(s[1] == "xlse")
          //   return true
          // else
          //   return false
        },
        successInform(response,file,filelist){
          this.$message({
            message: '上传成功',
            type: 'success'
          });
        },
        errorInform(response,file,filelist){
          this.$message.error('上传文件失败!');
        },
        handleRemove(file, fileList) {
          console.log(file, fileList);
        },
        handlePreview(file) {
          console.log(file);
        },
      }
    }
</script>

<style scoped>
  .upload-demo {
    width: 340px;
    margin-left: 20%;
    margin-top: 50px;
 }
  .el-upload__tip{
    text-align: center;
  }
  .upload_button{
    margin-top: 50px;
    text-align: center;
  }
</style>
