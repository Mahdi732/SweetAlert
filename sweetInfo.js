function showSweetInfo(type, message) {

   let existingAlert = document.querySelector('.sweet-alert');
   if (existingAlert) {
     existingAlert.remove();
   }

   let alert = document.createElement('div');
   alert.classList.add('sweet-alert');
   let icon = document.createElement('span');
   icon.classList.add('alert-icon');
   icon.innerHTML = 'ℹ️';
   if (type === 'info') {
      alert.classList.add('info');
    } else if (type === 'success') {
      alert.classList.add('success');
    } else if (type === 'warning') {
      alert.classList.add('warning');
    } else if (type === 'danger') {
      alert.classList.add('danger');
    }
   let description = document.createElement('p');
   description.classList.add('alert-description');
   description.textContent = message;

   let closeBtn = document.createElement('button');
   closeBtn.classList.add('close-btn');
   closeBtn.textContent = '×';
   closeBtn.onclick = () => alert.remove();

   alert.appendChild(icon);
   alert.appendChild(description);
   alert.appendChild(closeBtn);
   document.body.appendChild(alert);
   setTimeout(() => {
     alert.remove();
   }, 5000);
 }
 