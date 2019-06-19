<template>
    <div>
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
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <div class="el-upload__tip" slot="tip">上传excel文件</div>
      </el-upload>
      <el-button style="margin-left: 10px;" size="small" type="success" @click="submitUpload">上传到服务器</el-button>
    </div>
</template>

<script>
    export default {
        name: "upload_word",

      methods:{
        submitUpload() {
          this.$refs.upload.submit();
        },
        beforeAvatarUpload(file) {
          console.log(file.name)
          let s = file.name.split('.')
          const isExcel = s[1] == "xlsx"
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
        submitUpload() {
          this.$refs.upload.submit();
        },
      }
    }
</script>

<style scoped>

</style>
