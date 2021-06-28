<template>
  <v-flex xs12>
        <table>
        <tr>
          <td colspan="2" style="font-weight:700;">제목: {{board_detail.aTitle}}</td>
        </tr>
        <tr style="font-size:0.9rem;">
          <td style="text-align:right">작성일: {{board_detail.aDate}}</td>
        </tr>
        <tr>
          <td colspan="2" style="border:none;">내용: {{board_detail.aContent}}</td>
        </tr>
        <tr>
          <td colspan="2" style="border:none;text-align:right;border-top:3px double #ededed">
            <v-btn @click="BoardDelete({aIdx:aIdx})">삭제</v-btn>
          </td>
        </tr>
      </table>
  </v-flex>
</template>
<script>
import { mapActions, mapState } from "vuex"
export default {
    data() {
      return {
        aIdx : this.$route.params.aIdx,
      }
    },
    computed: {
       ...mapState(["board_detail"])
    },
    methods: {
      ...mapActions(["BoardDelete"])
    }
}
</script>
<style scoped>
table {
  width:600px;
  margin:0 auto;
  border-collapse:collapse;
  text-align: center;
}
table tr td {
  border-top:1px solid #ededed;
  border-bottom:1px solid #ededed;
  padding:10px;
}
</style>