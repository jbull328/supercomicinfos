<template>
    <div>
        <div>Hero Name</div>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>Comics This Hero Apears in</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(titles, index) in titles" :key="`t-${index}`">
                <td data-label="Title"></td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

</style>