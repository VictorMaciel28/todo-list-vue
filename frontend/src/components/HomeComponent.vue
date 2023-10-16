<template>
  <div class="container">
    <h1>Lista de tarefas</h1>
    <h3 class="title">Em progresso</h3>
    <ul>
      <li v-for="task in activeTasks" :key="task.id" class="list-item">
        {{ task.name }} - {{ task.description }}
        <div class="edit-buttons">
          <el-button v-on:click="changeStatus(task)" type="success"
            >Concluir</el-button
          >
          <el-button v-on:click="showEditForm(task)" type="warning"
            >Editar</el-button
          >
          <el-button v-on:click="deleteTask(task)" type="danger"
            >Excluir</el-button
          >
        </div>
      </li>
    </ul>
    <h3 class="title">Concluídas</h3>
    <ul>
      <li v-for="task in inactiveTasks" :key="task.id" class="list-item">
        {{ task.name }} - {{ task.description }}
        <div class="edit-buttons">
          <el-button v-on:click="changeStatus(task)" type="success"
            >Retornar</el-button
          >
          <el-button v-on:click="showEditForm(task)" type="warning"
            >Editar</el-button
          >
          <el-button v-on:click="deleteTask(task)" type="danger"
            >Excluir</el-button
          >
        </div>
      </li>
    </ul>
    <el-button
      v-on:click="
        isAddFormVisible = true;
        isEditFormVisible = false;
      "
      type="success"
      >Inclur tarefa</el-button
    >
    <ul v-if="isAddFormVisible">
      <h3 class="title">Nova Tarefa</h3>
      <el-form :model="addForm" label-width="120px">
        <el-form-item label="Tarefa">
          <el-input v-model="addForm.name" />
        </el-form-item>
        <el-form-item label="Descrição">
          <el-input v-model="addForm.description" />
        </el-form-item>
      </el-form>
      <li class="button-container">
        <el-button v-on:click="addTask()" type="success">Salvar</el-button>
        <el-button v-on:click="isAddFormVisible = false" type="danger"
          >Calcelar</el-button
        >
      </li>
    </ul>
    <ul v-if="isEditFormVisible">
      <h3 class="title">Editar Tarefa</h3>
      <el-form :model="editForm" label-width="120px">
        <el-form-item label="Tarefa">
          <el-input v-model="editForm.name" />
        </el-form-item>
        <el-form-item label="Descrição">
          <el-input v-model="editForm.description" />
        </el-form-item>
      </el-form>
      <li class="button-container">
        <el-button v-on:click="editTask()" type="success">Salvar</el-button>
        <el-button v-on:click="isEditFormVisible = false" type="danger"
          >Calcelar</el-button
        >
      </li>
    </ul>
  </div>
</template>
<script>
import taskService from "../services/TaskService";
import Task from "../interfaces/TaskInterface";
import { TransitionHooks } from "vue";

export default {
  data() {
    return {
      editForm: {},
      addForm: {},
      tasks: [],
      isAddFormVisible: false,
      isEditFormVisible: false,
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      return await taskService.getTasks();
    },
    async changeStatus(task) {
      await taskService.changeStautus(task);
      this.getTasks();
    },
    async deleteTask(task) {
      await taskService.deleteTask(task);
      this.getTasks();
    },
    showEditForm(task) {
      this.isAddFormVisible = false;
      this.isEditFormVisible = false;
      this.editForm = { ...task };
      setTimeout(() => {
        this.isEditFormVisible = true;
      }, 250);
    },
    async addTask() {
      await taskService.addTask(this.addForm);
      this.addForm = {};
      this.isAddFormVisible = false;
      this.getTasks();
    },
    async editTask() {
      await taskService.editTask(this.editForm);
      this.editForm = {};
      this.isEditFormVisible = false;
      this.getTasks();
    },
  },
  computed: {
    activeTasks() {
      return Array.isArray(this.tasks)
        ? this.tasks.filter((task) => task.active === true)
        : [];
    },
    inactiveTasks() {
      return Array.isArray(this.tasks)
        ? this.tasks.filter((task) => task.active === false)
        : [];
    },
  },
};
</script>

<style scoped>
ul {
  list-style-type: none;
}

.container {
  width: 800px;
  margin: auto;
}

.list-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1%;
}

.edit-buttons {
  display: flex;
  align-items: center;
}

.title {
  text-align: left;
}
</style>
