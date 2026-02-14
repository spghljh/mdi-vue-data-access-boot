<template>
  <div class="container mt-4">
    <h2 class="mb-3">member 테이블(json)</h2>

    <table class="table table-striped table-bordered">
      <thead class="table-light">
        <tr>
          <th>id_member</th>
          <th>id</th>
          <th>pass</th>
          <th>name</th>
          <th>email</th>
          <th>regist_day</th>
          <th>role</th>
          <th>status</th>
          <th>email_verified</th>
          <th>fail_count</th>
          <th>last_login</th>
          <th>updated_at</th>
          <th>deleted_at</th>
        </tr>
      </thead>
      <tbody>
        <tr v-if="loading"><td colspan="13" class="text-center text-muted">데이터 로딩 중...</td></tr>
        <tr v-for="member in members" :key="member.idMember">
          <td>{{ member.idMember }}</td>
          <td>{{ member.id }}</td>
          <td>{{ member.pass }}</td>
          <td>{{ member.name }}</td>
          <td>{{ member.email }}</td>
          <td>{{ member.registDay }}</td>
          <td>{{ member.role }}</td>
          <td>{{ member.status }}</td>
          <td>{{ member.emailVerified }}</td>
          <td>{{ member.failCount }}</td>
          <td>{{ member.lastLogin }}</td>
          <td>{{ member.updatedAt }}</td>
          <td>{{ member.deletedAt }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "PstmtCsrMemberTotal",
  data() {
    return { loading: true, members: [] };
  },
  mounted() {
    fetch("https://localhost:8081/api/members")
      .then(res => res.json())
      .then(data => { this.members = data; this.loading = false; })
      .catch(err => { console.error("Error loading Members:", err); this.loading = false; });
  }
};
</script>
