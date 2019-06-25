<template>
  <div>
    <el-tabs v-model="activeName" type="card">
      <el-tab-pane label="所有" name="first">
        <el-input
          class="search"
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
        <el-table
          :data="tableData.filter(data => !search || data.english.toLowerCase().includes(search.toLowerCase()))"
          stripe
          style="width: 100%">
          <el-table-column
            prop="chinese"
            label="中文"
            width="300">
            <template slot-scope="scope" class="chinese">
              <!--<a class="chinese">{{ scope.row.chinese }}</a>-->
              <el-popover trigger="hover" placement="bottom" v-if="scope.row.chinese.length>20">
                <p>{{scope.row.chinese}}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag
                    class="chinese"
                    type="warning"
                    effect="plain">
                    <span>{{ scope.row.chinese }}</span>
                  </el-tag>
                </div>
              </el-popover>
              <el-tag
                v-else
                type="success"
                effect="plain">
                <span>{{ scope.row.chinese }}</span>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="english"
            label="英文"
            width="300">
            <template slot-scope="scope" class="english">
              <el-popover trigger="hover" placement="bottom" v-if="scope.row.english.length>20">
                <p>{{scope.row.english}}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag
                    type="warning"
                    effect="plain">
                    <span>{{ scope.row.english }}</span>
                  </el-tag>
                </div>
              </el-popover>
              <el-tag
                v-else
                type="info"
                effect="plain">
                <span>{{ scope.row.english }}</span>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="keep_num"
            label="收藏"
            sortable
            width="150">
            <template slot-scope="scope" class="english">
          <span style="font-size: 15px;">{{scope.row.keep_num}}
            <img v-if="scope.row.is_keep" class="icon" @click="changekeepstatus(scope.row.id)" src="../../components/star-solid.svg"/>
            <img v-else class="icon" @click="changekeepstatus(scope.row.id)" src="../../components/star-empty.svg"/>
          </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="note"
            width="150"
            label="备注">
          </el-table-column>
          <el-table-column
            prop="date"
            sortable
            label="添加时间">
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane label="收藏" name="second">
        <el-input
          class="search"
          v-model="search_k"
          size="mini"
          placeholder="输入关键字搜索"/>
        <el-table
          :data="tableData.filter(data => !search_k || data.english.toLowerCase().includes(search_k.toLowerCase()))"
          stripe
          style="width: 100%">
          <el-table-column
            prop="chinese"
            label="中文"
            width="300">
            <template slot-scope="scope" class="chinese">
              <!--<a class="chinese">{{ scope.row.chinese }}</a>-->
              <el-popover trigger="hover" placement="bottom" v-if="scope.row.chinese.length>20">
                <p>{{scope.row.chinese}}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag
                    class="chinese"
                    type="warning"
                    effect="plain">
                    <span>{{ scope.row.chinese }}</span>
                  </el-tag>
                </div>
              </el-popover>
              <el-tag
                v-else
                type="success"
                effect="plain">
                <span>{{ scope.row.chinese }}</span>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="english"
            label="英文"
            width="300">
            <template slot-scope="scope" class="english">
              <el-popover trigger="hover" placement="bottom" v-if="scope.row.english.length>20">
                <p>{{scope.row.english}}</p>
                <div slot="reference" class="name-wrapper">
                  <el-tag
                    type="warning"
                    effect="plain">
                    <span>{{ scope.row.english }}</span>
                  </el-tag>
                </div>
              </el-popover>
              <el-tag
                v-else
                type="info"
                effect="plain">
                <span>{{ scope.row.english }}</span>
              </el-tag>
            </template>
          </el-table-column>
          <el-table-column
            prop="keep_num"
            label="收藏"
            sortable
            width="150">
            <template slot-scope="scope" class="english">
          <span style="font-size: 15px;">{{scope.row.keep_num}}
            <img v-if="scope.row.is_keep" class="icon" @click="changekeepstatus(scope.row.id)" src="../../components/star-solid.svg"/>
            <img v-else class="icon" @click="changekeepstatus(scope.row.id)" src="../../components/star-empty.svg"/>
          </span>
            </template>
          </el-table-column>
          <el-table-column
            prop="note"
            width="150"
            label="备注">
          </el-table-column>
          <el-table-column
            prop="date"
            sortable
            label="添加时间">
          </el-table-column>
        </el-table>
      </el-tab-pane>
    </el-tabs>
    <!--<el-input-->
      <!--class="search"-->
      <!--v-model="search"-->
      <!--size="mini"-->
      <!--placeholder="输入关键字搜索"/>-->
    <!--<el-table-->
      <!--:data="tableData.filter(data => !search || data.english.toLowerCase().includes(search.toLowerCase()))"-->
      <!--stripe-->
      <!--style="width: 100%">-->
      <!--<el-table-column-->
        <!--prop="chinese"-->
        <!--label="中文"-->
        <!--width="300">-->
        <!--<template slot-scope="scope" class="chinese">-->
          <!--&lt;!&ndash;<a class="chinese">{{ scope.row.chinese }}</a>&ndash;&gt;-->
          <!--<el-popover trigger="hover" placement="bottom" v-if="scope.row.chinese.length>20">-->
            <!--<p>{{scope.row.chinese}}</p>-->
            <!--<div slot="reference" class="name-wrapper">-->
              <!--<el-tag-->
                <!--class="chinese"-->
                <!--type="warning"-->
                <!--effect="plain">-->
                <!--<span>{{ scope.row.chinese }}</span>-->
              <!--</el-tag>-->
            <!--</div>-->
          <!--</el-popover>-->
          <!--<el-tag-->
            <!--v-else-->
            <!--type="success"-->
            <!--effect="plain">-->
            <!--<span>{{ scope.row.chinese }}</span>-->
          <!--</el-tag>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="english"-->
        <!--label="英文"-->
        <!--width="300">-->
        <!--<template slot-scope="scope" class="english">-->
          <!--<el-popover trigger="hover" placement="bottom" v-if="scope.row.english.length>20">-->
            <!--<p>{{scope.row.english}}</p>-->
            <!--<div slot="reference" class="name-wrapper">-->
              <!--<el-tag-->
                <!--type="warning"-->
                <!--effect="plain">-->
                <!--<span>{{ scope.row.english }}</span>-->
              <!--</el-tag>-->
            <!--</div>-->
          <!--</el-popover>-->
          <!--<el-tag-->
            <!--v-else-->
            <!--type="info"-->
            <!--effect="plain">-->
            <!--<span>{{ scope.row.english }}</span>-->
          <!--</el-tag>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="keep_num"-->
        <!--label="收藏"-->
        <!--sortable-->
        <!--width="150">-->
        <!--<template slot-scope="scope" class="english">-->
          <!--<span style="font-size: 15px;">{{scope.row.keep_num}}-->
            <!--<img v-if="scope.row.is_keep" class="icon" @click="changekeepstatus(scope.row.id)" src="../../components/star-solid.svg"/>-->
            <!--<img v-else class="icon" @click="changekeepstatus(scope.row.id)" src="../../components/star-empty.svg"/>-->
          <!--</span>-->
        <!--</template>-->
      <!--</el-table-column>-->
      <!--<el-table-column-->
        <!--prop="date"-->
        <!--sortable-->
        <!--label="添加时间">-->
      <!--</el-table-column>-->
    <!--</el-table>-->
  </div>
</template>

<script>
    export default {
        name: "wordlist",

      data() {
        // const generateData = _ => {
        //   const data = [];
        //   const getdata = this.tableData;
        //   console.log(getdata);
        //   getdata.forEach((word, index) => {
        //     if(word.is_keep){
        //       data.push({
        //         id: word.id,
        //         date: word.date,
        //         chinese: word.chinese,
        //         english:word.english,
        //         is_keep:word.is_keep,
        //         keep_num:word.keep_num
        //       });
        //     }
        //   });
        //   return data;
        // };
        return {
          search:'',
          search_k:'',
          activeName: 'first',
          tableData: [{
            id:1,
            date: '2016-05-02',
            chinese: '抛弃抛弃抛弃抛弃,抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃抛弃',
            english: 'abandon',
            keep_num: 7,
            is_keep:true
          }, {
            id:2,
            date: '2016-05-04',
            chinese: '抛弃',
            english: 'abandon',
            keep_num: 4,
            is_keep:false
          },{
            id:3,
            date: '2016-05-02',
            chinese: '抛弃',
            english: 'abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon abandon',
            keep_num: 2,
            is_keep:true,
            note:"!!!!!!!!"
          },{
            id:4,
            date: '2016-05-06',
            chinese: '抛弃',
            english: 'adandon',
            keep_num: 0,
            is_keep:false
          },
          ],
          // tableData_keep: generateData(),
        }
      },
      methods:{
          changekeepstatus(id){
            let statue
            for(let i =0 ;i<this.tableData.length;i++){
              if(this.tableData[i].id === id){
                this.tableData[i].is_keep = !this.tableData[i].is_keep;
                statue =  this.tableData[i].is_keep;
                if(statue){
                  this.tableData[i].keep_num++;
                }
                else {
                  this.tableData[i].keep_num--;
                }
                break;
              }
            }
            if(statue){
              this.$message.success("收藏成功");
            }
            else {
              this.$message.info("取消了收藏");
            }
          }
      }
    }
</script>

<style>
  /*.el-tag{*/

    /*min-height: 30px;*/
    /*display: table-cell;*/
    /*word-break: keep-all;*/
    /*word-wrap: break-word;*/
    /*white-space: normal;*/
    /*font-size: 18px;*/
    /*font-weight: lighter;*/
  /*}*/
  .el-tag span{
    display: -webkit-box;
    /*display: block;*/
    -webkit-box-orient:vertical;
    /*word-break: keep-all;*/
    overflow:hidden;
    text-overflow: ellipsis;
    /*word-break:break-all;*/
    white-space:normal;
    /*white-space: nowrap;*/
    -webkit-line-clamp:1;
  }
  .icon{
    cursor: pointer;
    height: 25px;
    margin-left:30px;
    display: inline-block;
    vertical-align:middle;
  }
  .search{
    width: 30%;
    margin-right: 15%;
    float: right;
  }

</style>
