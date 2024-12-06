<script lang="ts" setup>
const format = (type: string) => {
  const selection = window.getSelection()

  // 清空选中
  // selection?.removeAllRanges()

  // selection?.rangeCount
  const range = selection?.getRangeAt(0)

  const dom = range?.extractContents()
  const newDom = document.createElement('strong')
  newDom.appendChild(dom)

  range.insertNode(newDom)

  console.log('-------selction and range-------', selection, range)
  console.log('-------getBoundingClientRect---------', range?.getBoundingClientRect())
}
</script>

<template>
  <div class="editor-action">
    <div class="button" @click="format('bold')">Bold</div>
    <div class="button">Italic</div>
  </div>
  <div class="editor-container">
    <div class="box" contenteditable></div>
    <div class="cursor"></div>
  </div>
</template>

<style scoped>
.editor-container {
  padding: 20px;
  width: 100%;
}

.editor-action {
  display: flex;
  column-gap: 10px;
}

.button {
  padding: 10px 20px;
  background-color: #f40;
  color: #fff;
  cursor: pointer;
  user-select: none;
}

.button:active {
  background-color: rgb(212, 90, 46);
}

.box {
  width: 800px;
  height: 200px;
  border: 1px solid #ddd;
}

.cursor {
  width: 10px;
  height: 20px;
  background-color: #f40;
}
</style>
