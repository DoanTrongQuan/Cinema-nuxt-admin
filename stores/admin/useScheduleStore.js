import { defineStore } from "pinia";
import { getAllSchedule,getAllMovieSchedule,getAllRoomSchedule,createSchedule, deleteScheduleByAdmin} from '~/repositories/cinema/scheduleRepo';

export const useScheduleStore = defineStore({
  id: "scheduleStore",
  state: () => ({
    schedules:[],
    rooms:[],
    movies:[],
  }),
  getters: {},
  actions: {
    async getAllMovieSchedule(){
        try {
          const res = await getAllMovieSchedule()
          this.movies = res.data;
          
        } catch (error) {  
          alert(error.response.data)
        }
    },
    async getAllSchedule(){
          try {
            const res = await getAllSchedule()
            this.schedules = res.data;

          } catch (error) {  
            alert(error.response.data)
          }
      },

    async getAllRoomSchedule(){
      try {
        const res = await getAllRoomSchedule()
        this.rooms = res.data;

      } catch (error) {  
        alert(error.response.data)
      }
    },

    async createSchedule(data){
      try {
        const res = await createSchedule(data)
      } catch (error) {  
        alert(error.response.data)
      }
    },
    async deleteScheduleByAdmin(data){
      try {
        const res = await deleteScheduleByAdmin(data)
        alert("Xóa lịch chiếu thành công")
      } catch (error) {
        alert(error.response.data)
      }
    },

      clear() {
        this.$reset()
      }

  },
  


});