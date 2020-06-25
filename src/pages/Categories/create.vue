<template>
    <div class="categories-create-page page">
        <div>
            创建分类
        </div> 
        <el-form  label-width="80px" @submit.native.prevent="save">
            <el-form-item label="名称">
                <el-input v-model="model.name"></el-input>
            </el-form-item>
            <el-form-item>
                <el-button type="primary" native-type="submit">保存</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
<script>
export default {
    data(){
        return {
            model:{}
        }
    },
    methods:{
        async save(){
            const res = await this.$http.post('categorise', this.model);
            const _this = this;
            if(res ){
                this.$message({
                    type:'success',
                    title:'提示',
                    message:'创建成功',
                    onClose:()=>{
                        _this.$router.push({
                            name:'categoriseList'
                        })
                    }
                })
            }
        }
    }
}
</script>