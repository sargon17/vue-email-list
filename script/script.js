const mailsApp = new Vue({
  el: "#app",
  data: {
    generatedEmails: [],
    mailNumber: 10,
  },
  mounted() {
    for (let index = 0; index < this.mailNumber; index++) {
      axios
        .get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((response) => {
          this.generatedEmails.push(response.data.response);
        });
    }
  },
});
