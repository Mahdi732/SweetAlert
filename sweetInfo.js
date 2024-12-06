function showSweetInfo(type, message) {
 let alertEx = document.querySelector(".sweet-alert");
 if (alertEx) {
    alertEx.remove();
 }

 let alert = document.createElement("div");
 alert.classList.add('sweet-alert', 'fixed', 'top-1/2', 'left-1/2', 'transform', '-translate-x-1/2', '-translate-y-1/2', 'w-[32rem]', 'h-[20rem]', 'rounded-2xl', 'shadow-xl', 'font-medium', 'text-white', 'bg-blue-600');
 alert.textContent = message;
 
}