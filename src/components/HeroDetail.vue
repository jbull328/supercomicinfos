<template>
    <div class="container">
        <div>
            <img :src='`${selectedHero.thumbnail.path}/portrait_xlarge.${selectedHero.thumbnail.extension}`' />
        </div>
        <div class="top-row">
            <div id="hero-name">{{selectedHero.name}}</div>
            <div @click="closeHeroDetail" id="close-btn" class="btn btn-dark">X</div>
        </div>
        <div class="data-options-controls form-control">
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" v-model="comicsVisable">
                <label class="form-check-label" for="flexSwitchCheckDefault">Comics</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox"  v-model="seriesVisable">
                <label class="form-check-label" for="flexSwitchCheckDefault">Series</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox"  v-model="eventsVisable">
                <label class="form-check-label" for="flexSwitchCheckDefault">Events</label>
            </div>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox"  v-model="storiesVisable">
                <label class="form-check-label" for="flexSwitchCheckDefault">Stories</label>
            </div>
        </div>
        
        <table class="table table-dark table-striped">
            <thead>
                <tr>
                    <th>Titles This Hero Appears In</th>
                </tr>
            </thead>
            <tbody v-if="comicsVisable">
                <tr v-for="(comicTitles, index) in selectedHero.comics.items" :key="`ct-${index}`">
                    <td data-label="Title">{{comicTitles.name}}</td>
                </tr>
            </tbody>
            <tbody v-if="seriesVisable" >
                <tr v-for="(seriesTitles, index) in selectedHero.series.items" :key="`st-${index}`">
                    <td data-label="Title">{{seriesTitles.name}}</td>
                </tr>
            </tbody>
            <tbody v-if="eventsVisable">
                <tr  v-for="(eventTitles, index) in selectedHero.events.items" :key="`et-${index}`">
                    <td data-label="Title">{{eventTitles.name}}</td>
                </tr>
            </tbody>    
            <tbody v-if="storiesVisable" >
                <tr v-for="(storiesTitles, index) in selectedHero.stories.items" :key="`sst-${index}`">
                    <td data-label="Title">{{storiesTitles.name}}</td>
                </tr>
            </tbody>    
        </table> 
    </div>
</template>

<script>
    export default {
        name: 'HeroDetail',
        props: ['selectedHero'],
        data() {
            return {
                comicsVisable: true,
                seriesVisable: true,
                eventsVisable: true,
                storiesVisable: true,
            }
        },
        methods: {
            closeHeroDetail() {
                this.$emit('close')
                this.comicsVisable = true;
                this.seriesVisable = true;
                this.eventsVisable = true;
                this.storiesVisable = true;
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
    .data-options-controls {
        display: flex;
        justify-content: space-around;
    }
</style>