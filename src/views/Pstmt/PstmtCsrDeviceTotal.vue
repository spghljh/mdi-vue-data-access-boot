<template>
  <div class="container mt-4">
    <h2 class="mb-3">device 테이블(json)</h2>

    <table class="table table-striped table-bordered">
      <thead class="table-light">
        <tr>
          <th>id_device</th>
          <th>name_device</th>
          <th>id_cpu</th>
          <th>lineup_device</th>
          <th>release_device</th>
          <th>weight_device</th>
          <th>type_code_device</th>
          <th>manf_code_device</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading"><td colspan="8" class="text-center text-muted">데이터 로딩 중...</td></tr>
        <tr v-for="device in devices" :key="device.idDevice">
          <td>{{ device.idDevice }}</td>
          <td>{{ device.nameDevice }}</td>
          <td>{{ device.idCpu }}</td>
          <td>{{ device.lineupDevice }}</td>
          <td>{{ device.releaseDevice }}</td>
          <td>{{ device.weightDevice }}</td>
          <td>{{ device.typeCodeDevice }}</td>
          <td>{{ device.manfCodeDevice }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PstmtCsrDeviceTotal",
  data() {
    return { loading: true, devices: [] };
  },
  mounted() {
    fetch("https://localhost:8081/api/devices")
      .then(res => res.json())
      .then(data => { this.devices = data; this.loading = false; })
      .catch(err => { console.error("Error loading Devices:", err); this.loading = false; });
  }
};
</script>
