<template>
  <el-form status-icon :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" label-width="auto" class="demo-ruleForm">

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
          <div class="header"></div>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
          <el-form-item style="text-align: center;">
            <h1 class="font-header">吉甲大师报名表</h1>
          </el-form-item>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
          <el-row>
            <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
            <el-col :span="22"><div>
              <el-form-item label="姓名：" prop="nickname">
                <el-input type="text" v-model="ruleForm.nickname"></el-input>
              </el-form-item>
            </div></el-col>
            <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
          </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="证件照：" prop="photo">
              <el-upload
                  action=""
                  ref="upload"
                  :before-upload="handlesuccess"
                  :auto-upload="true"
                  :limit="1"
                  :http-request="httprequest"
                  list-type="picture-card"
                  :on-preview="handlePictureCardPreview">
                <i class="el-icon-plus"></i>
              </el-upload>
              <el-dialog :visible.sync="dialogVisible">
                <img width="100%" :src="dialogImageUrl" alt="">
              </el-dialog>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="性别：" prop="sex">
              <el-radio-group v-model="ruleForm.sex">
                <el-radio label="男"></el-radio>
                <el-radio label="女"></el-radio>
              </el-radio-group>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="籍贯：" prop="address">
              <el-input v-model="ruleForm.address"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="校区：" prop="region">
              <el-select v-model="ruleForm.region" placeholder="请选择" style="width: 100%;" :popper-append-to-body="false">
                <el-option
                    v-for="item in region_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="年级：" prop="classification">
              <el-select v-model="ruleForm.classification" placeholder="请选择" style="width: 100%;" :popper-append-to-body="false">
                <el-option
                    v-for="item in classification_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="学院：" prop="school">
              <el-input v-model="ruleForm.school"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="专业：" prop="subject">
              <el-input v-model="ruleForm.subject"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>


    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="学号：" prop="uid">
              <el-input v-model="ruleForm.uid"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="QQ：" prop="qq">
              <el-input v-model="ruleForm.qq"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="联系电话：" prop="phone">
              <el-input v-model="ruleForm.phone"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="邮箱：" prop="email">
              <el-input v-model="ruleForm.email"></el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="意向组别（第一志愿）：" prop="type_one">
              <el-select v-model="ruleForm.type_one" placeholder="请选择" style="width: 100%;" :popper-append-to-body="false">
                <el-option
                    v-for="item in type_one_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="意向组别（第二志愿）：" prop="type_two">
              <el-select v-model="ruleForm.type_two" placeholder="请选择" style="width: 100%;" :popper-append-to-body="false">
                <el-option
                    v-for="item in type_one_options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
              </el-select>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="自我简介：" prop="text_one">
              <el-input
                  :autosize="{ minRows: 8, maxRows: 50}"
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="ruleForm.text_one">
              </el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="加入原因：" prop="text_two">
              <el-input
                  :autosize="{ minRows: 8, maxRows: 50}"
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="ruleForm.text_two">
              </el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="期待的收获以及目标：" prop="text_three">
              <el-input
                  :autosize="{ minRows: 8, maxRows: 50}"
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="ruleForm.text_three">
              </el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
        <el-row>
          <el-col :span="1"><div style="background-color: #0095FF;visibility: hidden;">1</div></el-col>
          <el-col :span="22"><div>
            <el-form-item label="对吉甲大师的了解：" prop="text_four">
              <el-input
                  :autosize="{ minRows: 8, maxRows: 50}"
                  type="textarea"
                  placeholder="请输入内容"
                  v-model="ruleForm.text_four">
              </el-input>
            </el-form-item>
          </div></el-col>
          <el-col :span="1"><div style="background-color: yellow;visibility: hidden;">2</div></el-col>
        </el-row>
      </el-col>
    </el-row>

    <el-row type="flex" justify="space-around">
      <el-col :xs="23" :sm="20" :md="16" :lg="13" :xl="10">
          <el-form-item style="text-align: center;">
            <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
            <el-button @click="resetForm('ruleForm')">重置</el-button>
          </el-form-item>
      </el-col>
    </el-row>

  </el-form>
</template>

<script>

export default {
  name: 'App',
  data() {
    let nullval = (ruler,value,callback) => {
      if (value === '') {
        callback(new Error('内容不能为空'));
      } else {
        callback();
      }
    };
    let phoneval = (ruler,value,callback) => {
      if (value === '') {
        callback(new Error('内容不能为空'));
      } else {
        if (!(/^1[3456789]\d{9}$/.test(value))) {
          callback(new Error('手机号码有误，请重填'));
        } else {
          callback();
        }
      }
    };
    let photoval = (ruler,value,callback) => {
      if (this.photo === undefined) {
        callback(new Error('请上传图片'));
      } else {
        callback();
      }
    }
    return {
      ruleForm: {
        nickname: '',
        photo: '',
        sex: '',
        address: '',
        region: '',
        classification: '',
        school: '',
        subject: '',
        uid: '',
        qq: '',
        phone: '',
        email: '',
        type_one: '',
        type_two: '',
        text_one: '',
        text_two: '',
        text_three: '',
        text_four: '',
      },
      dialogImageUrl: '',
      dialogVisible: false,
      region_options: [{
        value: '前卫南区',
        label: '前卫南区'
      }, {
        value: '南岭校区',
        label: '南岭校区'
      }, {
        value: '南湖校区',
        label: '南湖校区'
      }, {
        value: '朝阳校区',
        label: '朝阳校区'
      },{
        value: '新民校区',
        label: '新民校区'
      }, {
        value: '和平校区',
        label: '和平校区'
      }],
      classification_options: [{
        value: '2019',
        label: '2019'
      }, {
        value: '2020',
        label: '2020'
      }, {
        value: '2021',
        label: '2021'
      }, {
        value: '2022',
        label: '2022'
      }],
      type_one_options: [{
        value: '机械组',
        label: '机械组'
      }, {
        value: '电控组',
        label: '电控组'
      }, {
        value: '视觉组',
        label: '视觉组'
      }, {
        value: 'AI组',
        label: 'AI组'
      }, {
        value: '软件组',
        label: '软件组'
      }, {
        value: '运营组',
        label: '运营组'
      }],
      rules: {
        nickname: [
          {validator: nullval,trigger:'blur'}
        ],
        photo: [
          {validator: photoval,trigger:'blur'}
        ],
        address: [
          {validator: nullval,trigger:'blur'}
        ],
        school: [
          {validator: nullval,trigger:'blur'}
        ],
        subject: [
          {validator: nullval,trigger:'blur'}
        ],
        uid: [
          {validator: nullval,trigger:'blur'}
        ],
        qq: [
          {validator: nullval,trigger:'blur'}
        ],
        phone: [
          {validator: phoneval,trigger:'blur'}
        ],
        text_one: [
          {validator: nullval,trigger:'blur'}
        ],
        text_two: [
          {validator: nullval,trigger:'blur'}
        ],
        text_three: [
          {validator: nullval,trigger:'blur'}
        ],
        text_four: [
          {validator: nullval,trigger:'blur'}
        ],
        email: [
          {validator: nullval,trigger:'blur'}
        ],
        sex: [
          {validator: nullval,trigger:'blur'}
        ],
        region: [
          {validator: nullval,trigger:'blur'}
        ],
        classification: [
          {validator: nullval,trigger:'blur'}
        ],
        type_one: [
          {validator: nullval,trigger:'blur'}
        ],
        type_two: [
          {validator: nullval,trigger:'blur'}
        ],
      },
    };
  },
  methods: {
    submitForm() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          this.$notify({
            title: '成功',
            message: '提交成功',
            type: 'success'
          });
        } else {
          this.$notify({
            title: '错误',
            message: '请检查表单',
            type: 'error'
          });
          return false;
        }
      });
    },
    resetForm() {
      this.photo = '';
      this.dialogImageUrl = '';
      this.dialogVisible = false;
      this.$refs['upload'].clearFiles();
      this.$refs['ruleForm'].resetFields();
    },
    httprequest(photo) {
      this.photo = photo;
      //修复自定义上传删除失败bug
      const prom = new Promise(() => {});
      prom.abort = () => {};
      return prom;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handlesuccess(photo) {
      this.photo = photo;
      this.$refs['ruleForm'].validateField('photo');
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #ECF2F7 !important;
  width: 100%;
  height: 80px;
  background-size: cover;
  background-image: url("./assets/images/header.png");
}

.font-header {
  color: #0095FF;
}

:deep(.el-col) {
  background-color: #FFFFFF;
}

:deep(.el-select-dropdown__wrap,.el-scrollbar__wrap) {
  margin-bottom: 0 !important;
}

</style>
