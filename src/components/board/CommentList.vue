<template>
  <v-flex xs12>
        <table
            v-for="item in List"
            :key="item.bIdx"
        >
        <tr style="font-size:0.9rem;">
          <td style="text-align:left">작성자: {{board_detail.user.name}}
          </td>
        </tr>
        <tr style="font-size:0.9rem;">
          <td style="text-align:left">작성일: {{item.bRedate}} </td>
        </tr>
        <tr style="font-size:0.9rem;">
          <td style="text-align:left"> {{item.bContent}} </td>
        </tr>
          <td colspan="1" style="border:none;text-align:right;border-top:1px double #ededed">
            <v-btn  router :to="{name:'boardEdit'}">답글</v-btn>
            <v-btn  router :to="{name:'boardEdit'}">수정</v-btn>
            <v-btn @click="CommentDelete(item.bIdx,item.aIdx)">삭제</v-btn>
          </td>
      </table>
      <div class="text-xs-center">
        <v-pagination
          v-model="page"
          :length="pagination.lastPage"
          :total-visible="5"
          @input="next(page)"
        ></v-pagination>
      </div>
  </v-flex>
</template>
<script>
import { mapActions, mapState } from "vuex"
import axios from 'axios'
import Route from '@/router/index'
export default {
    props: {
      aIdx: Number 
    },

    data() {
      return {
        pagination: null,
        page: null,
        List: null,
      }
    },
    created() {
    this.commentList()
    },

    computed: {
       ...mapState(["board_detail"])
    },
    methods: {
      CommentDelete(bIdx,aIdx) {
        return new Promise((resolve, reject) => {
          axios.delete('http://localhost:9100/api/test/commentDelete/'+bIdx, {
             params: {
                aIdx: this.aIdx
            } 
          })
              .then(Response => {
                  console.log(Response.data)
                  this.pagination = Response.data
                  this.List = this.pagination.list
                  this.aIdx = this.List.aIdx
                  
                  Route.push("/board/boardDetail/"+aIdx).catch(()=>{});
              })
              .catch(Error => {
                  console.log('error')
                  reject(Error)
              })
        })
      },
      next (page) {
        axios.get('http://localhost:9100/api/test/commentList/'+page, {
          params: {
                aIdx: this.aIdx
            } 
        })
          .then(Response => {
              console.log(Response.data)
              this.pagination = Response.data
              this.List = this.pagination.list
              console.log(this.List)
          })
          .catch(Error => {
              console.log('error')
              reject(Error)
          })
      },
      commentList() {
        return new Promise((resolve, reject) => {
          axios.get('http://localhost:9100/api/test/commentList', {
            params: {
                aIdx: this.aIdx
            }    
          })
              .then(Response => {
                  console.log(Response.data)
                  this.pagination = Response.data
                  this.List = this.pagination.list
              })
              .catch(Error => {
                  console.log('error')
                  reject(Error)
              })
        })
      }
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