<template>
    <div>
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number of Comics</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(hero, index) in results" :key="`h-${index}`">
                <td data-label="Name">{{hero.name}}</td>
                <td data-label="Number of Comics">{{hero.comics.available}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import gql from 'graphql-tag'
    
    export default {
        apollo: {
            results: gql`{results {
            id,
            name,
            description,
            comics {
                available
                items {
                    name
                }
            }  
        }}`,
        }
    }
</script>

<style scoped>

</style>