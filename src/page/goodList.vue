<template>
    <div class="page-product">
        <el-row class="m-crumbs">
            <crumbs />
        </el-row>
        <el-row>
            <el-rol :span="19">
                <el-row>
                    <category />
                </el-row>
                <el-row>
                    <list />
                </el-row>
            </el-rol>
            <el-col :span="5">
                
            </el-col>
        </el-row>
    </div>
</template>

<script>
import crumbs from '@/components/products/crumbs.vue';
import category from '@/components/products/category.vue';
import List from '@/components/products/list.vue';
export default {
    components: {
        crumbs,
        category,
        List,
    }
}
</script>
<style lang="scss">
@import '@/assets/css/products/index.scss';

</style>

