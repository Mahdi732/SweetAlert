function showSweetInfo(type, message) {

   let existingAlert = document.querySelector('.sweet-alert');
   if (existingAlert) {
     existingAlert.remove();
   }

   let alert = document.createElement('div');
   alert.classList.add('sweet-alert');
   let icon = document.createElement('span');
   icon.classList.add('alert-icon');
   if (type === 'info') {
      alert.classList.add('bg-blue-600');
    } else if (type === 'success') {
      alert.classList.add('bg-green-600');
    } else if (type === 'warning') {
      alert.classList.add('bg-yellow-500');
    } else if (type === 'danger') {
      alert.classList.add('bg-red-600');
    }
   icon.innerHTML = '✔️';
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
 