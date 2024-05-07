$(function() {

    $("#movie-form").on("submit", function (e) {
        e.preventDefault();
        let title = $("#title").val();
        let rating = $("#rating").val();

        let movieData = { title, rating };
        const HTMLtoAppend = createMovieDataHTML(movieData);

        $("#table-body").append(HTMLtoAppend);
        $("#movie-form").trigger("reset");
    });

    $("tbody").on("click", ".btn.btn-danger" ,function(e){
        $(e.target).closest("tr").remove();
    })
});

function createMovieDataHTML(data) {
    return `
    <tr>
      <td>${data.title}</td>
      <td>${data.rating}</td>
      <td>
        <button class="btn btn-danger">
          Delete
        </button>
      </td>
    <tr>
  `;
}