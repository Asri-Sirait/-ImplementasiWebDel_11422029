<script>
    $(document).ready(function () {
      $('.prodi-toggle').click(function (e) {
        e.preventDefault();
        var targetId = $(this).data('target');
        $(targetId).toggle();
      });
    });
  </script>