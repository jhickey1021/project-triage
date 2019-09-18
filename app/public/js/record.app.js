var patientRecordsApp = new Vue({
  el: '#patientRecordsApp',
  data: {
    patients: [],
    formPatient: {
      firstName:'',
      lastName:'',
      dob:'',
      sab:''

    }
  },
  methods: {
    fetchPatients() {
      fetch('dummy.php')
      .then(response => response.json())
      .then(json => { patientRecordsApp.patients = json })



    },

    handleCreateRecord(event){
      //todo POST the form
    this.patients.push(this.formPatient);
    this.formPatient = {
      firstName:'',
      lastName:'',
      dob:'',
      sab:''
    }
  },
  selectRecord(patient){
    console.log(patient);
  }

  },
  created() {
    this.fetchPatients()
  }
});
