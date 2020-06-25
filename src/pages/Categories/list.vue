<template>
    <div class="categories-create-page page">
        <div>
            分类列表
        </div> 
        <el-main>
            <el-table :data="items">
                <el-table-column prop="name" label="分类名称">
                </el-table-column>
                <el-table-column prop="_id" label="id" >
                </el-table-column>
                <el-table-column
                    fixed="right"
                    label="操作"
                    width="100">
                    <template slot-scope="scope">
                        <el-button @click="del(scope.row)" type="text" size="small">删除</el-button>
                        <el-button @click.native.prevent="edit" type="text" size="small">编辑</el-button>
                    </template>
                </el-table-column>
            </el-table>
        </el-main>
    </div>
</template>
<script>
export default {
    data(){
        return {
            items:[]
        }
    },
    methods:{
        async getCategorise(){
            const res = await this.$http.get('categorise/list', this.model);
            if(res ){
                this.items = res.data
            }
        },
        del(data){
            console.log('delete', data )
            this.$http.get( `/categorise/del/${data._id}` )
                .then(res=>{
                    console.log( res )
                    this.getCategorise()
                })
        },
        edit(){
            console.log( `编辑`)
        }
        
    },
    created(){
        this.getCategorise()
    }
}
</script>