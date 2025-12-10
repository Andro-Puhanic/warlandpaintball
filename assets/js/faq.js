document.addEventListener('DOMContentLoaded', function () {
  const questions = document.querySelectorAll('.faq-question');

  questions.forEach(q => {
    q.addEventListener('click', () => {
      const answer = q.nextElementSibling;
      const isOpen = answer.classList.contains('open');

      // Close all
      document.querySelectorAll('.faq-answer').forEach(a => {
        a.classList.remove('open');
        a.previousElementSibling.classList.remove('active');
      });

      // Toggle current
      if (!isOpen) {
        answer.classList.add('open');
        q.classList.add('active');
      }
    });
  });
});
