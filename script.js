// Controle das Abas Principais
const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        button.classList.add('active');
        const activeTabContent = document.getElementById(button.dataset.tab);
        activeTabContent.classList.add('active');

        // Garantir que as sub-abas também sejam resetadas
        const activeSubTabs = activeTabContent.querySelectorAll('.sub-tab-button');
        const activeSubContents = activeTabContent.querySelectorAll('.sub-tab-content');
        activeSubTabs.forEach(subTab => subTab.classList.remove('active'));
        activeSubContents.forEach(subContent => subContent.classList.remove('active'));

        // Ativar a primeira sub-aba por padrão
        const firstSubTab = activeTabContent.querySelector('.sub-tab-button');
        if (firstSubTab) {
            firstSubTab.classList.add('active');
            const firstSubTabContent = document.getElementById(firstSubTab.dataset.subtab);
            if (firstSubTabContent) {
                firstSubTabContent.classList.add('active');
            }
        }
    }); 
});
// Controle das Sub-Abas
const subTabButtons = document.querySelectorAll('.sub-tab-button');
const subTabContents = document.querySelectorAll('.sub-tab-content');

//quando clicado 

subTabButtons.forEach(button => {
    button.addEventListener('click', () => {
        subTabButtons.forEach(btn => btn.classList.remove('active'));
        subTabContents.forEach(content => content.classList.remove('active'));
        button.classList.add('active');
        document.getElementById(button.dataset.subtab).classList.add('active');
    });
});
// Controle das Pastas
document.querySelectorAll('.folder-toggle').forEach(function(folder) {
    folder.addEventListener('click', function() {
        const content = this.nextElementSibling;
        content.style.display = content.style.display === 'block' ? 'none' : 'block';
        const img = this.querySelector('.folder-icon');
        if (content.style.display === 'block') {
            img.src = 'folder-open.png';
        } else {
            img.src = 'folder-closed.png';
        }
    });
});




function openTab(evt, tabName) {
    var i, tab, tabLink;
    tab = document.getElementsByClassName("tab");
    for (i = 0; i < tab.length; i++) {
      tab[i].style.display = "none";
    }
    tabLink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLink.length; i++) {
      tabLink[i].className = tabLink[i].className.replace(" tab-active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " tab-active";
  }
  document.getElementById('toggle-dark-mode').addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('dark-mode', document.body.classList.contains('dark-mode'));
});

// Carregar preferências do usuário
window.onload = function() {
    const darkModeEnabled = localStorage.getItem('dark-mode') === 'true';
    if (darkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
};
// script.js
document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.sidebar-list a');
  const iframe = document.getElementById('video-player');
  
  links.forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const videoUrl = link.getAttribute('data-video');
      if (videoUrl) {
        iframe.src = videoUrl;
      }
    });
  });
});

const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const resetBtn = document.getElementById('resetBtn');

let timer;
let timeLeft = 15 * 60; // 25 minutos

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

function startTimer() {
    timer = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timer);
            return;
        }
        timeLeft--;
        updateDisplay();
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 15 * 60;
    updateDisplay();
}

startBtn.addEventListener('click', startTimer);
resetBtn.addEventListener('click', resetTimer);

updateDisplay();
// script.js

function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  sidebar.classList.toggle('open-sidebar');
}
