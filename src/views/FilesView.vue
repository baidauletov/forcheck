<template>
    <div class="files-view">
        <h2 class="files-view__title">
            Файлы
        </h2>
        <div class="files-view__item">
            <div 
                class="files-view__icon-wrapper" 
                @mouseover="openFolder = true" 
                @mouseleave="openFolder = false" 
                @click="folderOpen()">
                <icon-folder class="document__icon" v-if="!openFolder"/>
                <icon-open-folder class="document__icon-open"  v-if="openFolder" />
            </div>
            <p>
                Мои документы
            </p>
        </div>
    </div>
</template>

<script>
import iconFolder from '@/components/icons/IconFolder'
import iconOpenFolder from '@/components/icons/IconOpenFolder'
export default {
    name: 'filesView',

    components: {
        iconFolder,
        iconOpenFolder
    },

    data() {
        return {
            openFolder: false
        }
    },

    methods: {
        folderOpen() {
            console.log('folder open');
            // let input = document.createElement('input');
            // input.type = 'file';
            // input.click()
        }
    }

}
</script>

<style lang="scss">
.files-view {
    padding: 3rem 5rem;
    .files-view__title {
        text-align: left;
        padding-left: 6rem;
        padding-bottom: 2rem;
        font-weight: 600;
    }
    .files-view__item {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 20rem;
        height: 10rem;
        .files-view__icon-wrapper {
            width: 5rem;
            height: 5rem;
            cursor: pointer;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
    .document__icon {
    }
    .document__icon-open {
    }
}
</style>