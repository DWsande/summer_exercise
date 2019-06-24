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

    </el-tab-pane>
    <el-tab-pane label="词库选择" name="second">
      <el-form :label-position="labelpostion":model="formInline" :rules="rules" ref="formInline" >
        <el-form-item label="标题" prop="title">
          <el-input v-model="formInline.title" placeholder="请输入标题" class="input"></el-input>
        </el-form-item>
        <el-form-item label="单词">
          <el-transfer
            filterable
            :filter-method="filterMethod"
            filter-placeholder="请输入单词"
            v-model="value"
            :data="data"
            :titles="['词库','单词表']"
          >
            <template slot-scope="scope">
              <div  class="content">
                <el-popover trigger="hover" placement="bottom" v-if="scope.option.label.length>40">
                  <p>{{scope.option.label}}</p>
                  <p>{{scope.option.chinese}}</p>
                  <div slot="reference" class="name-wrapper">
                    <!--<el-tag size="medium">{{ scope.row.name }}</el-tag>-->
                    <span class="important" v-if="scope.option.isImportant">{{scope.option.label}}</span>
                    <span style="float: left;" v-else>{{scope.option.label}}</span>
                    <span class="switch">
                      <el-switch
                        v-model="scope.option.mode"
                        active-color="#13ce66"
                        inactive-color="#2896ff"
                        active-value="CtoE"
                        inactive-value="EtoC"
                        active-text="中译英"
                        inactive-text="英译中">
                      </el-switch>
                    </span>
                  </div>
                </el-popover>
                <div v-else>
                  <span class="important" v-if="scope.option.isImportant">{{scope.option.label}}</span>
                  <span style="float: left;" v-else>{{scope.option.label}}</span>
                  <span class="switch">
                    <el-switch
                      v-model="scope.option.mode"
                      active-color="#13ce66"
                      inactive-color="#2896ff"
                      active-value="CtoE"
                      inactive-value="EtoC"
                      active-text="中译英"
                      inactive-text="英译中">
                    </el-switch>
                  </span>
                </div>
              </div>
            </template>
            <div slot="left-footer" class="radio" >
              <el-radio v-model="radio" label="1">备选项</el-radio>
              <el-radio v-model="radio" label="2">备选项</el-radio>
            </div>
          </el-transfer>
        </el-form-item>
        <el-form-item class="button">
          <el-button @click="submitForm(formInline,value)" plain >生成</el-button>
          <el-button @click="refresh()">重置</el-button>
        </el-form-item>
      </el-form>
    </el-tab-pane>

  </el-tabs>
</template>

<script>
    export default {
        name: "upload_word",
      data() {
        const generateData = _ => {
          const data = [];
          const getdata =[
            {
              word:'abandon abandon abandon abandon abandon abandog abandon abandon abandon abandon abandon abandon abandon abandon abandon',
              id:1,
              chinese:'抛弃',
              isImportant:true
            },
            {
              word:'ability',
              id:2,
              chinese:'抛弃',
              isImportant:true
            },
            {
              word:'able',
              id:3,
              chinese:'抛弃',
              isImportant:false
            },
            {
              word:'abnormal ',
              id:4,
              chinese:'抛弃',
              isImportant:false
            },
            {
              word:'abnormal ',
              id:5,
              chinese:'抛弃',
              isImportant:false
            },
            {
              word:'abnormal ',
              id:6,
              chinese:'抛弃',
              isImportant:false
            },
            {
              word:'abnormal ',
              id:7,
              chinese:'抛弃',
              isImportant:false
            },
            {
              word:'abnormal ',
              id:8,
              chinese:'抛弃',
              isImportant:false
            },
            {
              word:'abnormal ',
              id:9,
              chinese:'抛弃',
              isImportant:false
            },
            {
              word:'abnormal ',
              id:10,
              chinese:'抛弃',
              isImportant:false
            },

          ]
          getdata.forEach((word, index) => {
            data.push({
              label: word.word,
              key: word.id,
              pinyin: word.word,
              chinese:word.chinese,
              isImportant:word.isImportant,
              mode:"CtoE"
            });
          });
          return data;
        };
        return {
          activeName: 'first',
          data: generateData(),
          value: [],
          radio:'1',
          labelpostion:"top",
          formInline: {
            title: '',
          },
          rules: {
            title: [
              {required: true, message: '请输入默写纸标题', trigger: 'blur'},
            ]
          }
        };

      },
      methods:{
        filterMethod(query, item) {
          return item.pinyin.indexOf(query) > -1;
        },
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
        submitForm(formName,value){
          if(!formName.title){
            this.$message.error('标题未填写');
            return
          }
          if(value.length === 0){
            this.$message.error('单词未选择');
            return
          }
          let na = [];
          let obj = {};
          for(let i=0 ;i<value.length;i++){
            for (let j=0;j<=this.data.length;j++){
              if(value[i] === this.datacopy[j].key){
                obj = {
                  id : this.data[j].key,
                  mode :  this.data[j].mode
                }
                na.push(obj)
                break
              }
            }
          }
          console.log(na)
          this.$message.success('生成成功');
        },
        refresh(){
          this.formInline.title = "";
          this.value = [];
        }
      }
    }
</script>

<style >
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
  .content {
    width:400px;
    min-height:45px;
    display:inline-block;
    clear: both;
  }
  .content span{
    display: -webkit-box;
    -webkit-box-orient:vertical;
    overflow:hidden;
    text-overflow: ellipsis;
    /*word-break:break-all;*/
    white-space:normal;
    -webkit-line-clamp:2;

  }
  .important{
    float: left;
    color: red;
    width: 200px
  }
  .important:hover{
    color:#409EFF;
  }
  .radio{
    margin-top: 10px;
    text-align: center
  }
  .button{
    margin-left: 30%;
  }
  .input{
    width: 50%
  }
  .el-transfer-panel__list.is-filterable{
    height: 400px;
    padding-top:0;
    display: block;
  }
  /*.el-transfer-panel__item{height:30px;line-height:30px;padding-left:15px;display:block}*/
  .el-transfer-panel{
    width:500px;
    height: 550px;
    text-align: left;
    display: inline-block
  }
  .el-checkbox__label .switch{
    float: right;
  }

</style>
