(()=>{"use strict";class e{constructor(e){const t=document.createElement("div");return t.classList.add("card"),t.innerHTML=` <button class="removeCard"><i class="fa-solid fa-xmark"></i></button><div class="card-text">${e}</div><div class="card-actions-container"><div class="action-like"><i class="fa-regular fa-thumbs-up"></i><div class="like-count">1</div></div><div class="action-comments"><i class="fa-regular fa-comments"></i><div class="comments-count">1</div></div><div class="action-attachment"><i class="fa-solid fa-paperclip"></i><div class="attachment-count">1</div></div><div class="action-more"><i class="fa-solid fa-bars"></i></div>`,t}}let t,o,r,c;const n=e=>{t.style.top=`${e.clientY}px`,t.style.left=`${e.clientX}px`},s=e=>{t=e.target.closest("div.card"),t&&t.querySelector("button.removeCard").classList.add("active")},a=e=>{t=e.target.closest("div.card"),t&&t.querySelector("button.removeCard").classList.remove("active")};function d(e){let o;if(c&&c.remove(),r){c=document.createElement("div"),c.innerHTML="<div></div>";const r=e.target.closest("div.trello-column");if(r){const n=r.querySelector("div.cards-container"),s=e.target.closest("div.card");o=s?`${s.getBoundingClientRect().height}px`:`${t.getBoundingClientRect().height}px`,c.style.height=o,n.insertBefore(c,s)}}}function l(){o=document.querySelectorAll("div.card"),o.forEach((e=>{e.addEventListener("mouseover",s),e.addEventListener("mouseout",a)}))}function i(){o=document.querySelectorAll("div.card");const e=document.querySelectorAll("div.trello-column");o.forEach((e=>{e.removeEventListener("mouseenter",d)})),e.forEach((e=>{e.removeEventListener("mouseenter",d)}))}const u=e=>{const o=e.target.closest("div.cards-container");i();try{o&&o.insertBefore(t,c)}catch(e){console.log(e)}finally{t.classList.remove("dragged"),t.style.width="inherit",c.remove(),t=void 0,r=!1}document.documentElement.removeEventListener("mouseup",u),document.documentElement.removeEventListener("mousemove",n),l()},v=e=>{if(e.preventDefault(),r=!0,(e=>{t=e.target.closest("div.card"),t.querySelector("button.removeCard").classList.remove("active")})(e),function(){o=document.querySelectorAll("div.card");const e=document.querySelectorAll("div.trello-column");o.forEach((e=>{e.addEventListener("mouseenter",d)})),e.forEach((e=>{e.addEventListener("mouseenter",d)}))}(),o=document.querySelectorAll("div.card"),o.forEach((e=>{e.removeEventListener("mouseover",s),e.removeEventListener("mouseout",a)})),e.target.closest("button.removeCard"))return t=e.target.closest("div.card"),t.remove(),l(),void i();t=e.target.closest("div.card");const c=`${t.getBoundingClientRect().width}px`;t.classList.contains("card")&&(t.classList.add("dragged"),t.style.width=c,document.documentElement.addEventListener("mouseup",u),document.documentElement.addEventListener("mousemove",n)),document.documentElement.removeEventListener("mouseover",s)};function m(){o=document.querySelectorAll("div.card"),o.forEach((e=>{e.addEventListener("mousedown",v)}))}function g(){document.querySelectorAll("button.addCard").forEach((e=>{e.addEventListener("click",(e=>{e.target.closest("button.addCard").classList.toggle("disactivated"),e.target.closest("div.trello-column").querySelector("form.cardForm").classList.toggle("vis")}))}))}function f(){document.querySelectorAll("form.cardForm").forEach((t=>{t.addEventListener("submit",(o=>{o.preventDefault();const r=o.target.querySelector("textarea#cardMessage");let c;c=r.value?new e(r.value):new e("default card"),o.target.closest("div.trello-column").querySelector("div.cards-container").appendChild(c),t.classList.toggle("vis"),o.target.closest("div.trello-column").querySelector("button.addCard").classList.toggle("disactivated"),l(),m()}))}))}window.addEventListener("beforeunload",(()=>{o=document.querySelector("div.trello-container").innerHTML,localStorage.setItem("pageData",JSON.stringify(o))})),document.addEventListener("DOMContentLoaded",(()=>{const e=localStorage.getItem("pageData");let t={};try{t=JSON.parse(e),t&&(document.querySelector("div.trello-container").innerHTML=t)}catch(e){console.log(e)}finally{m(),g(),f(),l()}})),m(),g(),f(),l()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQWUsTUFBTUEsRUFDbkJDLFdBQUFBLENBQVlDLEdBQ1YsTUFBTUMsRUFBY0MsU0FBU0MsY0FBYyxPQXVCM0MsT0F0QkFGLEVBQVlHLFVBQVVDLElBQUksUUFDMUJKLEVBQVlLLFVBRU4sZ0dBQUVOLDZhQW1CREMsQ0FDVCxFQ3RCRixJQUFJTSxFQUNBQyxFQUNBQyxFQUNBQyxFQUVKLE1BQU1DLEVBQWVDLElBQ25CTCxFQUFlTSxNQUFNQyxJQUFPLEdBQUVGLEVBQUVHLFlBQ2hDUixFQUFlTSxNQUFNRyxLQUFRLEdBQUVKLEVBQUVLLFdBQVcsRUFFeENDLEVBQW9CTixJQUN4QkwsRUFBaUJLLEVBQUVPLE9BQU9DLFFBQVEsWUFDOUJiLEdBQ29CQSxFQUFlYyxjQUFjLHFCQUNyQ2pCLFVBQVVDLElBQUksU0FDOUIsRUFFSWlCLEVBQW1CVixJQUN2QkwsRUFBaUJLLEVBQUVPLE9BQU9DLFFBQVEsWUFDOUJiLEdBQ29CQSxFQUFlYyxjQUFjLHFCQUNyQ2pCLFVBQVVtQixPQUFPLFNBQ2pDLEVBT0YsU0FBU0MsRUFBZVosR0FDdEIsSUFBSWEsRUFJSixHQUhJZixHQUNGQSxFQUFhYSxTQUVYZCxFQUFhLENBQ2ZDLEVBQWVSLFNBQVNDLGNBQWMsT0FDdENPLEVBQWFKLFVBQVksY0FDekIsTUFBTW9CLEVBQWNkLEVBQUVPLE9BQU9DLFFBQVEscUJBQ3JDLEdBQUlNLEVBQWEsQ0FDZixNQUFNQyxFQUFZRCxFQUFZTCxjQUFjLHVCQUN0Q08sRUFBY2hCLEVBQUVPLE9BQU9DLFFBQVEsWUFHbkNLLEVBREVHLEVBQ1ksR0FBRUEsRUFBWUMsd0JBQXdCQyxXQUV0QyxHQUFFdkIsRUFBZXNCLHdCQUF3QkMsV0FFekRwQixFQUFhRyxNQUFNaUIsT0FBU0wsRUFDNUJFLEVBQVVJLGFBQWFyQixFQUFja0IsRUFDdkMsQ0FDRixDQUVGLENBQ0EsU0FBU0ksSUFDUHhCLEVBQVFOLFNBQVMrQixpQkFBaUIsWUFDbEN6QixFQUFNMEIsU0FBU0MsSUFDYkEsRUFBUUMsaUJBQWlCLFlBQWFsQixHQUN0Q2lCLEVBQVFDLGlCQUFpQixXQUFZZCxFQUFnQixHQUV6RCxDQUNBLFNBQVNlLElBQ1A3QixFQUFRTixTQUFTK0IsaUJBQWlCLFlBQ2xDLE1BQU1LLEVBQWdCcEMsU0FBUytCLGlCQUFpQixxQkFDaER6QixFQUFNMEIsU0FBU0MsSUFDYkEsRUFBUUksb0JBQW9CLGFBQWNmLEVBQWUsSUFFM0RjLEVBQWNKLFNBQVNDLElBQ3JCQSxFQUFRSSxvQkFBb0IsYUFBY2YsRUFBZSxHQUU3RCxDQUNBLE1BQU1nQixFQUFhNUIsSUFDakIsTUFBTTZCLEVBQWlCN0IsRUFBRU8sT0FBT0MsUUFBUSx1QkFDeENpQixJQUNBLElBQ01JLEdBQ0ZBLEVBQWVWLGFBQWF4QixFQUFnQkcsRUFFaEQsQ0FBRSxNQUFPZ0MsR0FDUEMsUUFBUUMsSUFBSUYsRUFDZCxDQUFFLFFBQ0FuQyxFQUFlSCxVQUFVbUIsT0FBTyxXQUNoQ2hCLEVBQWVNLE1BQU1nQyxNQUFRLFVBQzdCbkMsRUFBYWEsU0FDYmhCLE9BQWlCdUMsRUFDakJyQyxHQUFjLENBQ2hCLENBQ0FQLFNBQVM2QyxnQkFBZ0JSLG9CQUFvQixVQUFXQyxHQUN4RHRDLFNBQVM2QyxnQkFBZ0JSLG9CQUFvQixZQUFhNUIsR0FDMURxQixHQUFtQixFQW9CZmdCLEVBQWNwQyxJQU9sQixHQU5BQSxFQUFFcUMsaUJBQ0Z4QyxHQUFjLEVBdEZNRyxLQUNwQkwsRUFBaUJLLEVBQUVPLE9BQU9DLFFBQVEsWUFDdEJiLEVBQWVjLGNBQWMscUJBQ3JDakIsVUFBVW1CLE9BQU8sU0FBUyxFQW9GOUIyQixDQUFhdEMsR0FkZixXQUNFSixFQUFRTixTQUFTK0IsaUJBQWlCLFlBQ2xDLE1BQU1LLEVBQWdCcEMsU0FBUytCLGlCQUFpQixxQkFDaER6QixFQUFNMEIsU0FBU0MsSUFDYkEsRUFBUUMsaUJBQWlCLGFBQWNaLEVBQWUsSUFFeERjLEVBQWNKLFNBQVNDLElBQ3JCQSxFQUFRQyxpQkFBaUIsYUFBY1osRUFBZSxHQUUxRCxDQU1FMkIsR0FyQkEzQyxFQUFRTixTQUFTK0IsaUJBQWlCLFlBQ2xDekIsRUFBTTBCLFNBQVNDLElBQ2JBLEVBQVFJLG9CQUFvQixZQUFhckIsR0FDekNpQixFQUFRSSxvQkFBb0IsV0FBWWpCLEVBQWdCLElBcUJ0RFYsRUFBRU8sT0FBT0MsUUFBUSxxQkFLbkIsT0FKQWIsRUFBaUJLLEVBQUVPLE9BQU9DLFFBQVEsWUFDbENiLEVBQWVnQixTQUNmUyxTQUNBSyxJQUdGOUIsRUFBaUJLLEVBQUVPLE9BQU9DLFFBQVEsWUFDbEMsTUFBTWdDLEVBQWEsR0FBRTdDLEVBQWVzQix3QkFBd0JnQixVQUN4RHRDLEVBQWVILFVBQVVpRCxTQUFTLFVBQ3BDOUMsRUFBZUgsVUFBVUMsSUFBSSxXQUM3QkUsRUFBZU0sTUFBTWdDLE1BQVFPLEVBQzdCbEQsU0FBUzZDLGdCQUFnQlgsaUJBQWlCLFVBQVdJLEdBQ3JEdEMsU0FBUzZDLGdCQUFnQlgsaUJBQWlCLFlBQWF6QixJQUd6RFQsU0FBUzZDLGdCQUFnQlIsb0JBQW9CLFlBQWFyQixFQUFpQixFQUc3RSxTQUFTb0MsSUFDUDlDLEVBQVFOLFNBQVMrQixpQkFBaUIsWUFDbEN6QixFQUFNMEIsU0FBU0MsSUFDYkEsRUFBUUMsaUJBQWlCLFlBQWFZLEVBQVcsR0FFckQsQ0FDQSxTQUFTTyxJQUNlckQsU0FBUytCLGlCQUFpQixrQkFDbENDLFNBQVNzQixJQUNyQkEsRUFBaUJwQixpQkFBaUIsU0FBVXhCLElBQzFDQSxFQUFFTyxPQUFPQyxRQUFRLGtCQUFrQmhCLFVBQVVxRCxPQUFPLGdCQUNwRDdDLEVBQUVPLE9BQU9DLFFBQVEscUJBQXFCQyxjQUFjLGlCQUFpQmpCLFVBQVVxRCxPQUFPLE1BQU0sR0FDNUYsR0FFTixDQUNBLFNBQVNDLElBQ2F4RCxTQUFTK0IsaUJBQWlCLGlCQUNsQ0MsU0FBU3lCLElBQ25CQSxFQUFZdkIsaUJBQWlCLFVBQVd4QixJQUN0Q0EsRUFBRXFDLGlCQUVGLE1BQU1XLEVBQVloRCxFQUFFTyxPQUFPRSxjQUFjLHdCQUN6QyxJQUFJd0MsRUFFRkEsRUFERUQsRUFBVUUsTUFDRixJQUFJaEUsRUFBSzhELEVBQVVFLE9BRW5CLElBQUloRSxFQUFLLGdCQUVIYyxFQUFFTyxPQUFPQyxRQUFRLHFCQUFxQkMsY0FBYyx1QkFDNUQwQyxZQUFZRixHQUN0QkYsRUFBWXZELFVBQVVxRCxPQUFPLE9BQzdCN0MsRUFBRU8sT0FBT0MsUUFBUSxxQkFBcUJDLGNBQWMsa0JBQWtCakIsVUFBVXFELE9BQU8sZ0JBQ3ZGekIsSUFDQXNCLEdBQXNCLEdBQ3RCLEdBRU4sQ0FFQVUsT0FBTzVCLGlCQUFpQixnQkFBZ0IsS0FDdEM1QixFQUFRTixTQUFTbUIsY0FBYyx3QkFBd0JmLFVBRXZEMkQsYUFBYUMsUUFBUSxXQUFZQyxLQUFLQyxVQUFVNUQsR0FBTyxJQUV6RE4sU0FBU2tDLGlCQUFpQixvQkFBb0IsS0FDNUMsTUFBTWlDLEVBQU9KLGFBQWFLLFFBQVEsWUFDbEMsSUFBSUMsRUFBVyxDQUFDLEVBQ2hCLElBQ0VBLEVBQVdKLEtBQUtLLE1BQU1ILEdBQ2xCRSxJQUNGckUsU0FBU21CLGNBQWMsd0JBQXdCZixVQUFZaUUsRUFFL0QsQ0FBRSxNQUFPN0IsR0FDUEMsUUFBUUMsSUFBSUYsRUFDZCxDQUFFLFFBQ0FZLElBQ0FDLElBQ0FHLElBQ0ExQixHQUNGLEtBR0ZzQixJQUNBQyxJQUNBRyxJQUNBMUIsRyIsInNvdXJjZXMiOlsid2VicGFjazovL2Fqcy8uL3NyYy9qcy9jb21wb25lbnRzL2NhcmQuanMiLCJ3ZWJwYWNrOi8vYWpzLy4vc3JjL2pzL2FwcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJkIHtcbiAgY29uc3RydWN0b3IobWVzc2FnZSkge1xuICAgIGNvbnN0IGNhcmRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgY2FyZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FyZCcpO1xuICAgIGNhcmRFbGVtZW50LmlubmVySFRNTCA9ICcgPGJ1dHRvbiBjbGFzcz1cInJlbW92ZUNhcmRcIj48aSBjbGFzcz1cImZhLXNvbGlkIGZhLXhtYXJrXCI+PC9pPjwvYnV0dG9uPidcbiAgICAgICArICc8ZGl2IGNsYXNzPVwiY2FyZC10ZXh0XCI+J1xuICAgICAgICsgYCR7bWVzc2FnZX1gXG4gICAgICAgKyAnPC9kaXY+J1xuICAgICAgICsgJzxkaXYgY2xhc3M9XCJjYXJkLWFjdGlvbnMtY29udGFpbmVyXCI+J1xuICAgICAgICsgJzxkaXYgY2xhc3M9XCJhY3Rpb24tbGlrZVwiPidcbiAgICAgICArICc8aSBjbGFzcz1cImZhLXJlZ3VsYXIgZmEtdGh1bWJzLXVwXCI+PC9pPidcbiAgICAgICArICc8ZGl2IGNsYXNzPVwibGlrZS1jb3VudFwiPjE8L2Rpdj4nXG4gICAgICAgKyAnPC9kaXY+J1xuICAgICAgICsgJzxkaXYgY2xhc3M9XCJhY3Rpb24tY29tbWVudHNcIj4nXG4gICAgICAgKyAnPGkgY2xhc3M9XCJmYS1yZWd1bGFyIGZhLWNvbW1lbnRzXCI+PC9pPidcbiAgICAgICArICc8ZGl2IGNsYXNzPVwiY29tbWVudHMtY291bnRcIj4xPC9kaXY+J1xuICAgICAgICsgJzwvZGl2PidcbiAgICAgICArICc8ZGl2IGNsYXNzPVwiYWN0aW9uLWF0dGFjaG1lbnRcIj4nXG4gICAgICAgKyAnPGkgY2xhc3M9XCJmYS1zb2xpZCBmYS1wYXBlcmNsaXBcIj48L2k+J1xuICAgICAgICsgJzxkaXYgY2xhc3M9XCJhdHRhY2htZW50LWNvdW50XCI+MTwvZGl2PidcbiAgICAgICArICc8L2Rpdj4nXG4gICAgICAgKyAnPGRpdiBjbGFzcz1cImFjdGlvbi1tb3JlXCI+J1xuICAgICAgICsgJzxpIGNsYXNzPVwiZmEtc29saWQgZmEtYmFyc1wiPjwvaT4nXG4gICAgICAgKyAnPC9kaXY+JztcblxuICAgIHJldHVybiBjYXJkRWxlbWVudDtcbiAgfVxufVxuIiwiLy8gVE9ETzogd3JpdGUgY29kZSBoZXJlXG5cbmltcG9ydCBDYXJkIGZyb20gJy4vY29tcG9uZW50cy9jYXJkJztcblxubGV0IGN1cnJlbnRFbGVtZW50O1xubGV0IGNhcmRzO1xubGV0IGNhcmRHcmFiYmVkO1xubGV0IGVtcHR5RWxlbWVudDtcblxuY29uc3Qgb25Nb3VzZU92ZXIgPSAoZSkgPT4ge1xuICBjdXJyZW50RWxlbWVudC5zdHlsZS50b3AgPSBgJHtlLmNsaWVudFl9cHhgO1xuICBjdXJyZW50RWxlbWVudC5zdHlsZS5sZWZ0ID0gYCR7ZS5jbGllbnRYfXB4YDtcbn07XG5jb25zdCBzaG93RGVsZXRlQnV0dG9uID0gKGUpID0+IHtcbiAgY3VycmVudEVsZW1lbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpO1xuICBpZiAoY3VycmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gY3VycmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLnJlbW92ZUNhcmQnKTtcbiAgICBjdXJyZW50QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICB9XG59O1xuY29uc3QgaGlkZUNsb3NlQnV0dG9uID0gKGUpID0+IHtcbiAgY3VycmVudEVsZW1lbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpO1xuICBpZiAoY3VycmVudEVsZW1lbnQpIHtcbiAgICBjb25zdCBjdXJyZW50QnV0dG9uID0gY3VycmVudEVsZW1lbnQucXVlcnlTZWxlY3RvcignYnV0dG9uLnJlbW92ZUNhcmQnKTtcbiAgICBjdXJyZW50QnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICB9XG59O1xuY29uc3QgaGlkZUNsb3NlQnRuID0gKGUpID0+IHtcbiAgY3VycmVudEVsZW1lbnQgPSBlLnRhcmdldC5jbG9zZXN0KCdkaXYuY2FyZCcpO1xuICBjb25zdCBidG4gPSBjdXJyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24ucmVtb3ZlQ2FyZCcpO1xuICBidG4uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59O1xuZnVuY3Rpb24gc2hvd0VtcHR5U3BhY2UoZSkge1xuICBsZXQgY2FyZEhlaWdodDtcbiAgaWYgKGVtcHR5RWxlbWVudCkge1xuICAgIGVtcHR5RWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuICBpZiAoY2FyZEdyYWJiZWQpIHtcbiAgICBlbXB0eUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBlbXB0eUVsZW1lbnQuaW5uZXJIVE1MID0gJzxkaXY+PC9kaXY+JztcbiAgICBjb25zdCBjYXJkc0NvbHVtbiA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi50cmVsbG8tY29sdW1uJyk7XG4gICAgaWYgKGNhcmRzQ29sdW1uKSB7XG4gICAgICBjb25zdCBjb250YWluZXIgPSBjYXJkc0NvbHVtbi5xdWVyeVNlbGVjdG9yKCdkaXYuY2FyZHMtY29udGFpbmVyJyk7XG4gICAgICBjb25zdCBtb3VzZVVwSXRlbSA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJyk7XG5cbiAgICAgIGlmIChtb3VzZVVwSXRlbSkge1xuICAgICAgICBjYXJkSGVpZ2h0ID0gYCR7bW91c2VVcEl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkuaGVpZ2h0fXB4YDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNhcmRIZWlnaHQgPSBgJHtjdXJyZW50RWxlbWVudC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHR9cHhgO1xuICAgICAgfVxuICAgICAgZW1wdHlFbGVtZW50LnN0eWxlLmhlaWdodCA9IGNhcmRIZWlnaHQ7XG4gICAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGVtcHR5RWxlbWVudCwgbW91c2VVcEl0ZW0pO1xuICAgIH1cbiAgfVxuICAvLyBlbXB0eUVsZW1lbnQgPSB1bmRlZmluZWQ7XG59XG5mdW5jdGlvbiBzaG93RGVsZXRlQnV0dG9ucygpIHtcbiAgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2FyZCcpO1xuICBjYXJkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzaG93RGVsZXRlQnV0dG9uKTtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGlkZUNsb3NlQnV0dG9uKTtcbiAgfSk7XG59XG5mdW5jdGlvbiByZW1vdmVFbXB0eVNwYWNlTGlzdGVuZXJzKCkge1xuICBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jYXJkJyk7XG4gIGNvbnN0IHRyZWxsb0NvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYudHJlbGxvLWNvbHVtbicpO1xuICBjYXJkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc2hvd0VtcHR5U3BhY2UpO1xuICB9KTtcbiAgdHJlbGxvQ29sdW1ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc2hvd0VtcHR5U3BhY2UpO1xuICB9KTtcbn1cbmNvbnN0IG9uTW91c2VVcCA9IChlKSA9PiB7XG4gIGNvbnN0IGNhcmRzQ29udGFpbmVyID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2LmNhcmRzLWNvbnRhaW5lcicpO1xuICByZW1vdmVFbXB0eVNwYWNlTGlzdGVuZXJzKCk7XG4gIHRyeSB7XG4gICAgaWYgKGNhcmRzQ29udGFpbmVyKSB7XG4gICAgICBjYXJkc0NvbnRhaW5lci5pbnNlcnRCZWZvcmUoY3VycmVudEVsZW1lbnQsIGVtcHR5RWxlbWVudCk7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSBmaW5hbGx5IHtcbiAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdkcmFnZ2VkJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc3R5bGUud2lkdGggPSAnaW5oZXJpdCc7XG4gICAgZW1wdHlFbGVtZW50LnJlbW92ZSgpO1xuICAgIGN1cnJlbnRFbGVtZW50ID0gdW5kZWZpbmVkO1xuICAgIGNhcmRHcmFiYmVkID0gZmFsc2U7XG4gIH1cbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgb25Nb3VzZU92ZXIpO1xuICBzaG93RGVsZXRlQnV0dG9ucygpO1xufTtcbmZ1bmN0aW9uIHJlbW92ZURlbEJ0bkxpc3RlbmVycygpIHtcbiAgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2FyZCcpO1xuICBjYXJkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW92ZXInLCBzaG93RGVsZXRlQnV0dG9uKTtcbiAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JywgaGlkZUNsb3NlQnV0dG9uKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBpbnNlcnRFbXB0eVNwYWNlTGlzdGVuZXJzKCkge1xuICBjYXJkcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2Rpdi5jYXJkJyk7XG4gIGNvbnN0IHRyZWxsb0NvbHVtbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYudHJlbGxvLWNvbHVtbicpO1xuICBjYXJkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc2hvd0VtcHR5U3BhY2UpO1xuICB9KTtcbiAgdHJlbGxvQ29sdW1ucy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgc2hvd0VtcHR5U3BhY2UpO1xuICB9KTtcbn1cblxuY29uc3QgZG93bk9uQ2FyZCA9IChlKSA9PiB7XG4gIGUucHJldmVudERlZmF1bHQoKTtcbiAgY2FyZEdyYWJiZWQgPSB0cnVlO1xuICBoaWRlQ2xvc2VCdG4oZSk7XG4gIGluc2VydEVtcHR5U3BhY2VMaXN0ZW5lcnMoKTtcbiAgcmVtb3ZlRGVsQnRuTGlzdGVuZXJzKCk7XG5cbiAgaWYgKGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5yZW1vdmVDYXJkJykpIHtcbiAgICBjdXJyZW50RWxlbWVudCA9IGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi5jYXJkJyk7XG4gICAgY3VycmVudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgc2hvd0RlbGV0ZUJ1dHRvbnMoKTtcbiAgICByZW1vdmVFbXB0eVNwYWNlTGlzdGVuZXJzKCk7XG4gICAgcmV0dXJuO1xuICB9XG4gIGN1cnJlbnRFbGVtZW50ID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2LmNhcmQnKTtcbiAgY29uc3QgY2FyZFdpZHRoID0gYCR7Y3VycmVudEVsZW1lbnQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGh9cHhgO1xuICBpZiAoY3VycmVudEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJkJykpIHtcbiAgICBjdXJyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdkcmFnZ2VkJyk7XG4gICAgY3VycmVudEVsZW1lbnQuc3R5bGUud2lkdGggPSBjYXJkV2lkdGg7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNldXAnLCBvbk1vdXNlVXApO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBvbk1vdXNlT3Zlcik7XG4gIH1cblxuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJywgc2hvd0RlbGV0ZUJ1dHRvbik7XG59O1xuXG5mdW5jdGlvbiByZWZyZXNoQ2FyZHNMaXN0ZW5lcigpIHtcbiAgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdkaXYuY2FyZCcpO1xuICBjYXJkcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkb3duT25DYXJkKTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRDYXJkTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGFkZENhcmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdidXR0b24uYWRkQ2FyZCcpO1xuICBhZGRDYXJkQnV0dG9uLmZvckVhY2goKGFkZEJ1dHRvbkVsZW1lbnQpID0+IHtcbiAgICBhZGRCdXR0b25FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbi5hZGRDYXJkJykuY2xhc3NMaXN0LnRvZ2dsZSgnZGlzYWN0aXZhdGVkJyk7XG4gICAgICBlLnRhcmdldC5jbG9zZXN0KCdkaXYudHJlbGxvLWNvbHVtbicpLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uY2FyZEZvcm0nKS5jbGFzc0xpc3QudG9nZ2xlKCd2aXMnKTtcbiAgICB9KTtcbiAgfSk7XG59XG5mdW5jdGlvbiBhZGRGb3JtTGlzdGVuZXIoKSB7XG4gIGNvbnN0IGFkZENhcmRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnZm9ybS5jYXJkRm9ybScpO1xuICBhZGRDYXJkRm9ybS5mb3JFYWNoKChmb3JtRWxlbWVudCkgPT4ge1xuICAgIGZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChlKSA9PiB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgIGNvbnN0IGlucHV0VGV4dCA9IGUudGFyZ2V0LnF1ZXJ5U2VsZWN0b3IoJ3RleHRhcmVhI2NhcmRNZXNzYWdlJyk7XG4gICAgICBsZXQgbmV3Q2FyZDtcbiAgICAgIGlmIChpbnB1dFRleHQudmFsdWUpIHtcbiAgICAgICAgbmV3Q2FyZCA9IG5ldyBDYXJkKGlucHV0VGV4dC52YWx1ZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdDYXJkID0gbmV3IENhcmQoJ2RlZmF1bHQgY2FyZCcpO1xuICAgICAgfVxuICAgICAgY29uc3QgY29udGFpbmVyID0gZS50YXJnZXQuY2xvc2VzdCgnZGl2LnRyZWxsby1jb2x1bW4nKS5xdWVyeVNlbGVjdG9yKCdkaXYuY2FyZHMtY29udGFpbmVyJyk7XG4gICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmV3Q2FyZCk7XG4gICAgICBmb3JtRWxlbWVudC5jbGFzc0xpc3QudG9nZ2xlKCd2aXMnKTtcbiAgICAgIGUudGFyZ2V0LmNsb3Nlc3QoJ2Rpdi50cmVsbG8tY29sdW1uJykucXVlcnlTZWxlY3RvcignYnV0dG9uLmFkZENhcmQnKS5jbGFzc0xpc3QudG9nZ2xlKCdkaXNhY3RpdmF0ZWQnKTtcbiAgICAgIHNob3dEZWxldGVCdXR0b25zKCk7XG4gICAgICByZWZyZXNoQ2FyZHNMaXN0ZW5lcigpO1xuICAgIH0pO1xuICB9KTtcbn1cblxud2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2JlZm9yZXVubG9hZCcsICgpID0+IHtcbiAgY2FyZHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdkaXYudHJlbGxvLWNvbnRhaW5lcicpLmlubmVySFRNTDtcblxuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgncGFnZURhdGEnLCBKU09OLnN0cmluZ2lmeShjYXJkcykpO1xufSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICBjb25zdCBqc29uID0gbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3BhZ2VEYXRhJyk7XG4gIGxldCBwYWdlRGF0YSA9IHt9O1xuICB0cnkge1xuICAgIHBhZ2VEYXRhID0gSlNPTi5wYXJzZShqc29uKTtcbiAgICBpZiAocGFnZURhdGEpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Rpdi50cmVsbG8tY29udGFpbmVyJykuaW5uZXJIVE1MID0gcGFnZURhdGE7XG4gICAgfVxuICB9IGNhdGNoIChlcnJvcikge1xuICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgfSBmaW5hbGx5IHtcbiAgICByZWZyZXNoQ2FyZHNMaXN0ZW5lcigpO1xuICAgIGFkZENhcmRMaXN0ZW5lcigpO1xuICAgIGFkZEZvcm1MaXN0ZW5lcigpO1xuICAgIHNob3dEZWxldGVCdXR0b25zKCk7XG4gIH1cbn0pO1xuXG5yZWZyZXNoQ2FyZHNMaXN0ZW5lcigpO1xuYWRkQ2FyZExpc3RlbmVyKCk7XG5hZGRGb3JtTGlzdGVuZXIoKTtcbnNob3dEZWxldGVCdXR0b25zKCk7XG4iXSwibmFtZXMiOlsiQ2FyZCIsImNvbnN0cnVjdG9yIiwibWVzc2FnZSIsImNhcmRFbGVtZW50IiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwiaW5uZXJIVE1MIiwiY3VycmVudEVsZW1lbnQiLCJjYXJkcyIsImNhcmRHcmFiYmVkIiwiZW1wdHlFbGVtZW50Iiwib25Nb3VzZU92ZXIiLCJlIiwic3R5bGUiLCJ0b3AiLCJjbGllbnRZIiwibGVmdCIsImNsaWVudFgiLCJzaG93RGVsZXRlQnV0dG9uIiwidGFyZ2V0IiwiY2xvc2VzdCIsInF1ZXJ5U2VsZWN0b3IiLCJoaWRlQ2xvc2VCdXR0b24iLCJyZW1vdmUiLCJzaG93RW1wdHlTcGFjZSIsImNhcmRIZWlnaHQiLCJjYXJkc0NvbHVtbiIsImNvbnRhaW5lciIsIm1vdXNlVXBJdGVtIiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiaGVpZ2h0IiwiaW5zZXJ0QmVmb3JlIiwic2hvd0RlbGV0ZUJ1dHRvbnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImVsZW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRW1wdHlTcGFjZUxpc3RlbmVycyIsInRyZWxsb0NvbHVtbnMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwib25Nb3VzZVVwIiwiY2FyZHNDb250YWluZXIiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsInVuZGVmaW5lZCIsImRvY3VtZW50RWxlbWVudCIsImRvd25PbkNhcmQiLCJwcmV2ZW50RGVmYXVsdCIsImhpZGVDbG9zZUJ0biIsImluc2VydEVtcHR5U3BhY2VMaXN0ZW5lcnMiLCJjYXJkV2lkdGgiLCJjb250YWlucyIsInJlZnJlc2hDYXJkc0xpc3RlbmVyIiwiYWRkQ2FyZExpc3RlbmVyIiwiYWRkQnV0dG9uRWxlbWVudCIsInRvZ2dsZSIsImFkZEZvcm1MaXN0ZW5lciIsImZvcm1FbGVtZW50IiwiaW5wdXRUZXh0IiwibmV3Q2FyZCIsInZhbHVlIiwiYXBwZW5kQ2hpbGQiLCJ3aW5kb3ciLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImpzb24iLCJnZXRJdGVtIiwicGFnZURhdGEiLCJwYXJzZSJdLCJzb3VyY2VSb290IjoiIn0=