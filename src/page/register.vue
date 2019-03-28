<template>
    <div class="page-register">
        <div class="header">
            <header>
                <a href="#" class="site-logo"></a>
                <div class="login">
                    <span>已有美团账号 ？ </span>
                    <router-link :to="{name: 'login'}">登录</router-link>
                </div>
            </header>
        </div>
        <div class="content">
            <el-form 
                    :model="registerForm" 
                    status-icon 
                    :rules="rules" 
                    ref="registerForm" 
                    label-width="100px" 
                    class="demo-ruleForm"
                    >
                <el-form-item label="用户名" prop="userName">
                    <el-input type="text" v-model="registerForm.userName" autocomplete="off"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input type="password" v-model="registerForm.password" autocomplete="off" ></el-input>
                </el-form-item>
                <div class="pw-strength">
                    <div :class="['bar', strengthclass]"></div>
                    <div class="letter">
                        <span>弱</span>
                        <span>中</span>
                        <span>强</span>
                    </div>
                </div>
                <el-form-item label="确认密码" prop="repassword">
                    <el-input type="repassword" v-model="registerForm.repassword" autocomplete="off"></el-input>
                </el-form-item>
\
                <el-form-item>
                    <el-button type="primary" @click="submitForm('registerForm')">提交</el-button>
                </el-form-item>
            </el-form>
        </div>
        <footer>
            
        </footer>
    </div>
</template>
<script>
export default {
    data () {
        var validateUser = (rule, value, callback) => {
            if (value === "") {
                callback(new Error('请输入用户名'));
            } else if (value.length < 4 || value) {
                callback(new Error('用户名必须为4-16位的字母数字下划线组成'));

            } else {
                callback();
            }
        }
        var validatePass = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请输入密码'));
            } else {
            if (this.registerForm.repassword !== '') {
                this.$refs.registerForm.validateField('repassword');
            }
            callback();
            }
        };
        var validatePass2 = (rule, value, callback) => {
            if (value === '') {
            callback(new Error('请再次输入密码'));
            } else if (value !== this.registerForm.password) {
            callback(new Error('两次输入密码不一致!'));
            } else {
            callback();
            }
        };
        return {
            registerForm: {
                userName: '',
                password: '',
                repassword: '',
            },
            strengthclass: '',
            rules: {
                password: [
                    { validator: validatePass, trigger: 'blur' }
                ],
                repassword: [
                    { validator: validatePass2, trigger: 'blur' }
                ],
                userName: [
                    { validator: validateUser, trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        submitForm () {

        },
        input () {
            var regStr = /(\w)+/g;
            var regNum = /(\d)+/g;
            var reg =/_/g;
            var strongth = this.registerForm.password.match (reg) && this.registerForm.password(regNum) && this.registerForm.password.match(regStr)
            

            if (this.registerForm.password.length > 20 || (this.registerForm.password.length > 6 && strongth)){
                this.strengthclass = 'strong';

            } else if (this.registerForm.password.length < 6) {
                this.strengthclass = 'week';
            } else if (!this.registerForm.password) {
                this.strengthclass = '';
            } else {
                this.strengthclass = 'normal';
            }

        }
    }
}
</script>

<style lang="scss">
  @import '@/assets/css/register/index.scss';
</style>
