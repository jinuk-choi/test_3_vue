<template>
    <v-flex xs12 >
        <v-form style="width:600px;margin:0 auto;">
            <span>작성자: {{ Userinfo.User_Name }}</span>
            <v-textarea
                v-model="bContent"
                rows="1"
                label="댓글을 입력해주세요"
                type="text"
            ></v-textarea>
            <v-col class="text-right"> 
                <v-btn @click="CommentWrite({bContent})">확인</v-btn>
            </v-col>
        </v-form>       
    </v-flex>
</template>
<script>
import { mapState,mapActions } from 'vuex'
import axios from 'axios'
import Route from '@/router/index'
export default {
    props: {
      aIdx: Number 
    },

    data() {
        return {
            bContent: null,
           
        }
    },
    
    computed: {
        ...mapState(["Userinfo"]),
        ...mapState(["board_detail"])
    },
    methods: {
        CommentWrite(payload) {
          payload.uIdx = this.Userinfo.User_Idx
          payload.aIdx = this.board_detail.aIdx
          return new Promise((resolve, reject) => {
            axios.post('http://localhost:9100/api/test/commentWrite/', payload, {
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
        },

    }
    
}
</script>