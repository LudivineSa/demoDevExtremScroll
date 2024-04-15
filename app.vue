<template>
  <div class="test">
    <DxDataGrid 
            id="dataGrid"
            :data-source="data"
            :auto-columns-width="false"
        >
      <DxColumn data-field="id" width="200" />
      <DxColumn data-field="name" width="200" />
      <DxColumn data-field="content" width="200"/>
      <DxColumn data-field="date" width="200"/>
      <DxColumn data-field="test" width="200"/>
      <DxColumn data-field="long" width="200"/>
      <DxColumn data-field="column" width="200"/>
      <DxColumn data-field="boolean" width="200"/>
      <DxColumn data-field="test" width="200"/>
      <DxColumn data-field="long" width="200"/>
      <DxColumn data-field="column" width="200"/>
      <DxColumn data-field="boolean" width="200"/>
      </DxDataGrid>
  </div>
</template>

<script setup lang="ts">
import {
    DxDataGrid,
    DxColumn,
  } from 'devextreme-vue/data-grid';


const data = [{
  id: 1,
  name: "one",
  content: "something",
  date: "today",
  long: "very long content i need to put",
  test: "another column",
  column: "third column",
  boolean: true,
},{
  id: 1,
  name: "one",
  content: "something",
  date: "today",
  long: "very long content i need to put",
  test: "another column",
  column: "third column",
  boolean: true,
},
{
  id: 1,
  name: "one",
  content: "something",
  date: "today",
  long: "very long content i need to put",
  test: "another column",
  column: "third column",
  boolean: true,
},
{
  id: 1,
  name: "one",
  content: "something",
  date: "today",
  long: "very long content i need to put",
  test: "another column",
  column: "third column",
  boolean: true,
},
{
  id: 1,
  name: "one",
  content: "something",
  date: "today",
  long: "very long content i need to put",
  test: "another column",
  column: "third column",
  boolean: true,
},
{
  id: 1,
  name: "one",
  content: "something",
  date: "today",
  long: "very long content i need to put",
  test: "another column",
  column: "third column",
  boolean: true,
}]

</script>

<style>

#dataGrid {
  width: 100%;
}
</style>