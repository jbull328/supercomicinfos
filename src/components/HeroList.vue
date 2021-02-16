<template>
    <div>
        <HeroDetail id="hero-detail-container" class="hero-data" :selectedHero="selectedHero" :style="{display: showHeroDetail ? 'block' : 'none'}" @close="closeHeroDetail" />
        <table class="table table-dark table-striped table-hover col-8 container hero-data" id="hero-list-container" :style="{display: showHeroDetail ? 'none' : ''}" >
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number of Comics</th>
                    <th>Number of Series</th>
                    <th>Number of Events</th>
                    <th>Number of Stories</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(hero, index) in results" :key="`h-${index}`" @click="showComics(hero); defineHeroImg()">
                <td data-label="Name">{{hero.name}}</td>
                <td data-label="Number of Comics">{{hero.comics.available}}</td>
                <td data-label="Number of Series">{{hero.series.available}}</td>
                <td data-label="Number of Events">{{hero.events.available}}</td>
                <td data-label="Number of Stories">{{hero.stories.available}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    import gql from 'graphql-tag'
    import HeroDetail from './HeroDetail.vue'

    export default {
        name: 'HeroList',
        components: {HeroDetail},
        data() {
            return {
                selectedHero: {},
                showHeroDetail: false,
            }
        },
        apollo: {
            results: gql`{results {
            id,
            name,
            description,
            thumbnail {
                path,
                extension
            },
            comics {
                available
                items {
                    name,
                    resourceURI
                }
            },
            series {
                available,
                items {
                    name,
                    resourceURI
                }
            },
            events {
                available,
                items {
                    name,
                    resourceURI
                }
            },
            stories {
                available,
                items {
                    name,
                    resourceURI
                }
            }   
        }}`,
        },
        methods: {
            showComics(h) {
                this.selectedHero = h
                this.showHeroDetail = true
            },
            closeHeroDetail() {
                this.herosTitles = ''
                this.showHeroDetail = false
            },
        }
    }
</script>

<style scoped>
    #hero-detail-container {
        z-index: 99;
    }
    .hero-data {
        text-align: left;
    }
</style>