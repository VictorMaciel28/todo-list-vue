<template>
  <div class="container">
    <h1>Lista de tarefas</h1>
    <h3 class="title">Em progresso</h3>
    <ul>
      <li v-for="task in activeTasks" :key="task.id" class="list-item">
        {{ task.name }}
        <div class="edit-buttons">
          <el-button v-on:click="changeStatus(task)" type="success"
            >Concluir</el-button
          >
          <el-button type="warning">Editar</el-button>
          <el-button v-on:click="deleteTask(task)" type="danger"
            >Excluir</el-button
          >
        </div>
      </li>
    </ul>
    <h3 class="title">Concluídas</h3>
    <ul>
      <li v-for="task in inactiveTasks" :key="task.id" class="list-item">
        {{ task.name }}
        <div class="edit-buttons">
          <el-button v-on:click="changeStatus(task)" type="success"
            >Retornar</el-button
          >
          <el-button type="warning">Editar</el-button>
          <el-button v-on:click="deleteTask(task)" type="danger"
            >Excluir</el-button
          >
        </div>
      </li>
    </ul>
    <el-button type="success">Inclur tarefa</el-button>

    <ul>
      <h3 class="title">Nova Tarefa</h3>
      <el-form :model="form" label-width="120px">
        <el-form-item label="Tarefa">
          <el-input v-model="form.name" />
        </el-form-item>
        <el-form-item label="Descrição">
          <el-input v-model="form.name" />
        </el-form-item>
      </el-form>
      <li class="button-container">
        <el-button type="success">Salvar</el-button>
        <el-button type="danger">Calcelar</el-button>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
import taskService from "../services/TaskService";
import Task from "../interfaces/TaskInterface";

export default {
  data() {
    return {
      form: { name: "" },
      tasks: [] as Task[],
    };
  },
  mounted() {
    this.getTasks();
  },
  methods: {
    async getTasks() {
      this.tasks = await taskService.getTasks();
    },
    async changeStatus(task: Task) {
      await taskService.changeStautus(task);
      this.getTasks();
    },
    async deleteTask(task: Task) {
      await taskService.deleteTask(task);
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
