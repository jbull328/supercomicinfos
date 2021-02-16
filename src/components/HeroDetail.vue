<template>
    <div class="container">
        <div class="top-row">
            <div id="hero-name">{{selectedHero.name}}</div>
            <div @click="closeHeroDetail" id="close-btn" class="btn btn-dark">X</div>
        </div>
        
        <table class="table table-dark table-striped table-hover">
            <thead>
                <tr>
                    <th>Comics This Hero Apears in</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(titles, index) in selectedHero.comics.items" :key="`t-${index}`">
                <td data-label="Title">{{titles.name}}</td>
                </tr>
            </tbody>
        </table> 
    </div>
</template>

<script>
    export default {
        name: 'HeroDetail',
        props: ['selectedHero'],
        methods: {
            closeHeroDetail() {
                this.$emit('close')
            }
        }
    }
    
</script>

<style scoped>
    #hero-name {
        font-size: 5rem;
        font-family: 'Quantico', sans-serif;
    }
    #close-btn {
        height: 40px;
    }
    .top-row {
        display: flex;
        justify-content: space-between;
    }
</style>