// Firelight Computers - client-side store and interactions
const PRODUCTS = [
  // Desktops
  {id:'p001',title:'Inferno X1 Gaming PC',cat:'desktops',spec:'RTX 4090 · Ryzen 9 · 32GB RAM',price:364000,stock:5,image:'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80'},
  {id:'p002',title:'Forge Pro Workstation',cat:'desktops',spec:'RTX 4080 · 64GB RAM',price:260000,stock:3,image:'https://images.unsplash.com/photo-1517433670267-08bbd4be890f?w=600&auto=format&fit=crop&q=80'},
  {id:'p003',title:'Ember Mini Desktop',cat:'desktops',spec:'RTX 4060 Ti · i7 · 16GB',price:169000,stock:12,image:'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=600&auto=format&fit=crop&q=80'},
  // Laptops
  {id:'p004',title:'Ultralight Laptop 14"',cat:'laptops',spec:'i7 · 16GB · 512GB NVMe',price:156000,stock:8,image:'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80'},
  {id:'p011',title:'Gaming Laptop 15" RTX',cat:'laptops',spec:'RTX 4070 · i9 · 32GB · 1TB',price:234000,stock:4,image:'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&auto=format&fit=crop&q=80'},
  {id:'p012',title:'Business Laptop 13"',cat:'laptops',spec:'i5 · 8GB · 256GB SSD',price:91000,stock:15,image:'https://images.unsplash.com/photo-1543616992-49d97750eee7?w=600&auto=format&fit=crop&q=80'},
  {id:'p013',title:'MacBook Air M2',cat:'laptops',spec:'M2 Chip · 16GB · 512GB',price:182000,stock:6,image:'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=600&auto=format&fit=crop&q=80'},
  {id:'p014',title:'Student Laptop 15"',cat:'laptops',spec:'Ryzen 5 · 8GB · 256GB',price:65000,stock:20,image:'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&auto=format&fit=crop&q=80'},
  // Phones
  {id:'p010',title:'Samsung Galaxy S24',cat:'phones',spec:'128GB · 8GB RAM · 50MP Camera',price:130000,stock:6,image:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80'},
  {id:'p015',title:'iPhone 15 Pro 256GB',cat:'phones',spec:'256GB · A17 Chip · Pro Camera',price:156000,stock:4,image:'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=600&auto=format&fit=crop&q=80'},
  {id:'p016',title:'Xiaomi Redmi Note 12',cat:'phones',spec:'128GB · 6GB RAM · 108MP',price:39000,stock:25,image:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80'},
  {id:'p017',title:'Samsung Galaxy A54',cat:'phones',spec:'128GB · 8GB RAM · 50MP',price:91000,stock:18,image:'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=600&auto=format&fit=crop&q=80'},
  {id:'p018',title:'Tecno Camon 20',cat:'phones',spec:'128GB · 8GB RAM · 64MP',price:45500,stock:30,image:'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=600&auto=format&fit=crop&q=80'},
  {id:'p019',title:'Oppo Reno 11',cat:'phones',spec:'256GB · 12GB RAM · 50MP',price:104000,stock:12,image:'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=600&auto=format&fit=crop&q=80'},
  {id:'p020',title:'Huawei P60 Pro',cat:'phones',spec:'512GB · 12GB RAM · Triple Camera',price:156000,stock:7,image:'https://images.unsplash.com/photo-1606857521015-7f9fcf423740?w=600&auto=format&fit=crop&q=80'},
  {id:'p021',title:'Pixel 8 Pro',cat:'phones',spec:'256GB · 12GB RAM · Tensor G3',price:130000,stock:9,image:'https://images.unsplash.com/photo-1598532163257-ae3c6b2524b6?w=600&auto=format&fit=crop&q=80'},
  // Accessories
  {id:'p008',title:'Ergo Wireless Mouse',cat:'accessories',spec:'Rechargeable · Bluetooth',price:5200,stock:85,image:'https://images.unsplash.com/photo-1527814050087-3793815479db?w=600&auto=format&fit=crop&q=80'},
  {id:'p022',title:'Mechanical Keyboard',cat:'accessories',spec:'RGB · Mechanical Switches',price:15600,stock:45,image:'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=600&auto=format&fit=crop&q=80'},
  {id:'p023',title:'Gaming Headset',cat:'accessories',spec:'7.1 Surround · USB/RGB',price:19500,stock:38,image:'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=600&auto=format&fit=crop&q=80'},
  // Storage
  {id:'p006',title:'NVMe SSD 1TB',cat:'storage',spec:'Gen4 · 7000 MB/s',price:16800,stock:50,image:'https://images.unsplash.com/photo-1591488320449-0117010c0dac?w=600&auto=format&fit=crop&q=80'},
  {id:'p007',title:'HDD 2TB',cat:'storage',spec:'7200 RPM · SATA',price:7800,stock:34,image:'https://images.unsplash.com/photo-1591488320449-0117010c0dac?w=600&auto=format&fit=crop&q=80'},
  // Printers
  {id:'p005',title:'OfficeJet Pro',cat:'printers',spec:'All-in-one · WiFi · Duplex',price:32400,stock:10,image:'https://images.unsplash.com/photo-1522543804507-263395f34184?w=600&auto=format&fit=crop&q=80'},
  {id:'p024',title:'Laser Printer Pro',cat:'printers',spec:'Monochrome · Fast Print',price:45500,stock:8,image:'https://images.unsplash.com/photo-1534531173927-a718928d4638?w=600&auto=format&fit=crop&q=80'},
  // Screens
  {id:'p009',title:'15.6" Laptop Screen (FHD)',cat:'screens',spec:'IPS · 60Hz',price:10300,stock:22,image:'https://images.unsplash.com/photo-1598550880863-4e8ca3d6093f?w=600&auto=format&fit=crop&q=80'},
  {id:'p025',title:'27" Monitor 4K',cat:'screens',spec:'UHD · IPS · USB-C',price:78000,stock:14,image:'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600&auto=format&fit=crop&q=80'}
];

function escapeHtml(s){ return String(s).replace(/[&<>\"]/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[ch])); }
function formatPrice(n){ return typeof n==='number' ? 'KSh '+n.toLocaleString('en-KE') : n; }

function renderProducts(list, containerId='productsGrid'){
  const grid = document.getElementById(containerId); if(!grid) return;
  grid.innerHTML = '';
  list.forEach(p=>{
    const a = document.createElement('article'); a.className='product'; a.dataset.cat=p.cat; a.id='prod-'+p.id;
    a.innerHTML = `
      <img src="${p.image || 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600&auto=format&fit=crop&q=80'}" alt="${escapeHtml(p.title)}" onerror="this.src='https://images.unsplash.com/photo-1511455133811-87b3d7f3f6c3?q=80&w=600&auto=format&fit=crop&s=placeholder'">
      <h3>${escapeHtml(p.title)}</h3>
      <div class="spec">${escapeHtml(p.spec)}</div>
      <div class="price">${formatPrice(p.price)}</div>
      <div style="margin-top:8px"><a class="btn small" href="#contact" onclick="prefillQuote('${encodeURIComponent(p.title)}')">Enquire</a> <a class="btn ghost small" href="#" onclick="openProductDetails('${encodeURIComponent(p.title)}')">Details</a></div>
    `;
    grid.appendChild(a);
  });

  // admin products listing
  const adminTbody = document.getElementById('adminProducts'); if(adminTbody){ adminTbody.innerHTML=''; list.forEach(p=>{ const tr=document.createElement('tr'); tr.innerHTML=`<td>${p.id}</td><td>${escapeHtml(p.title)}</td><td>KSh ${p.price.toLocaleString('en-KE')}</td><td>${p.stock}</td><td><button class="btn small" onclick="editProduct('${p.id}')">Edit</button></td>`; adminTbody.appendChild(tr); }); }
}

document.addEventListener('DOMContentLoaded', ()=>{
  // render into single-page structure in index.html if present
  renderProducts(PRODUCTS);
  document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());
  initInteractions();
  
  // Make upload area clickable
  const uploadArea = document.getElementById('uploadArea');
  const uploadInput = document.getElementById('laptopUpload');
  if(uploadArea && uploadInput){
    uploadArea.addEventListener('click', () => {
      uploadInput.click();
    });
  }
  
  // Close search dropdown when clicking outside
  document.addEventListener('click', (e) => {
    const searchDropdown = document.getElementById('searchDropdown');
    const searchInput = document.getElementById('globalSearch');
    if(searchDropdown && searchInput && !searchInput.contains(e.target) && !searchDropdown.contains(e.target)){
      searchDropdown.style.display = 'none';
    }
  });
});

function applyFilters(){
  const q = (document.getElementById('globalSearch')?.value||'').toLowerCase().trim();
  const cat = document.getElementById('filterCategory')?.value||'all';
  const filtered = PRODUCTS.filter(p=>{
    const matchesCat = cat==='all' ? true : p.cat===cat;
    const matchesQ = !q ? true : (p.title+' '+p.spec+' '+p.id).toLowerCase().includes(q);
    return matchesCat && matchesQ;
  });
  renderProducts(filtered);
  showSearchDropdown(q, filtered);
}

function showSearchDropdown(query, results){
  const dropdown = document.getElementById('searchDropdown');
  if(!dropdown) return;
  
  if(!query || query.length < 1){
    dropdown.style.display = 'none';
    return;
  }
  
  if(results.length === 0){
    dropdown.innerHTML = '<div style="padding: 20px; text-align: center; color: var(--muted);">No products found</div>';
    dropdown.style.display = 'block';
    return;
  }
  
  const maxResults = Math.min(results.length, 5);
  let html = '';
  for(let i = 0; i < maxResults; i++){
    const p = results[i];
    html += `
      <div onclick="selectProduct('${p.id}')" style="padding: 12px 16px; cursor: pointer; border-bottom: 1px solid #dee2e6; transition: background 0.2s;" 
           onmouseover="this.style.background='var(--glass)';" 
           onmouseout="this.style.background='';">
        <div style="font-weight: 600; color: #1a1a1a; margin-bottom: 4px;">${escapeHtml(p.title)}</div>
        <div style="font-size: 13px; color: var(--muted);">${escapeHtml(p.spec)} - ${formatPrice(p.price)}</div>
      </div>
    `;
  }
  
  if(results.length > maxResults){
    html += `<div style="padding: 12px 16px; text-align: center; color: var(--accent); font-weight: 600;">+ ${results.length - maxResults} more results</div>`;
  }
  
  dropdown.innerHTML = html;
  dropdown.style.display = 'block';
}

function selectProduct(id){
  document.getElementById('globalSearch').value = '';
  document.getElementById('searchDropdown').style.display = 'none';
  const product = PRODUCTS.find(p => p.id === id);
  if(product){
    document.querySelector('#products')?.scrollIntoView({behavior: 'smooth'});
    setTimeout(() => {
      const prodEl = document.getElementById('prod-'+id);
      if(prodEl){
        prodEl.style.transform = 'scale(1.05)';
        prodEl.style.transition = 'transform 0.3s';
        setTimeout(() => { prodEl.style.transform = ''; }, 500);
      }
    }, 300);
  }
}

function clearSearch(){
  document.getElementById('globalSearch').value = '';
  document.getElementById('searchDropdown').style.display = 'none';
  applyFilters();
}

function initInteractions(){
  const search = document.getElementById('globalSearch'); const filter = document.getElementById('filterCategory');
  search && search.addEventListener('input', applyFilters);
  filter && filter.addEventListener('change', applyFilters);

  // mobile nav toggle
  const mobileToggle = document.getElementById('mobileToggle'); if(mobileToggle){ mobileToggle.addEventListener('click', ()=>{ const nav=document.getElementById('mainNav'); nav.style.display=(getComputedStyle(nav).display==='flex')?'none':'flex'; }); }

  // nav smooth scroll + active highlight
  const navLinks = document.querySelectorAll('.nav-link'); navLinks.forEach(link=>{ link.addEventListener('click', function(e){ e.preventDefault(); const target=document.querySelector(this.getAttribute('href')); if(target) target.scrollIntoView({behavior:'smooth',block:'start'}); navLinks.forEach(n=>n.classList.remove('active')); this.classList.add('active'); }); });

  const sections = document.querySelectorAll('main section[id]'); const obs = new IntersectionObserver((entries)=>{ entries.forEach(entry=>{ const id=entry.target.id; const link=document.querySelector('.nav-link[href="#'+id+'"]'); if(entry.isIntersecting){ navLinks.forEach(n=>n.classList.remove('active')); link && link.classList.add('active'); } }); },{root:null,threshold:0.45}); sections.forEach(s=>obs.observe(s));
}

function prefillQuote(nameEncoded){ const name = decodeURIComponent(nameEncoded); document.getElementById('cSubject') && (document.getElementById('cSubject').value='Quote: '+name); document.getElementById('cMessage') && (document.getElementById('cMessage').value='Hi — I would like a quote for: '+name+'\nPlease include lead time and warranty details.'); document.querySelector('#contact') && document.querySelector('#contact').scrollIntoView({behavior:'smooth'}); document.getElementById('cName') && document.getElementById('cName').focus(); }
function openProductDetails(nameEncoded){ alert('Product details demo for: '+decodeURIComponent(nameEncoded)); }
function editProduct(id){ alert('Admin edit demo for '+id); }

function submitContact(e){
  e.preventDefault();
  const name=document.getElementById('cName').value.trim(); const email=document.getElementById('cEmail').value.trim(); const subject=document.getElementById('cSubject').value; const message=document.getElementById('cMessage').value.trim();
  if(!name||!email){ document.getElementById('contactStatus').textContent='Please provide name and email.'; return; }
  // Mailto fallback
  const mailto = `mailto:hello@firelight.example?subject=${encodeURIComponent(subject+' — from '+name)}&body=${encodeURIComponent(message+'\n\nContact: '+name+' | '+email)}`;
  // To enable mail client open: window.location.href = mailto;
  document.getElementById('contactStatus').textContent='Demo: message prepared — configure Formspree/Netlify or enable mailto to send.';
}

function clearContact(){ document.getElementById('cName') && (document.getElementById('cName').value=''); document.getElementById('cEmail') && (document.getElementById('cEmail').value=''); document.getElementById('cMessage') && (document.getElementById('cMessage').value=''); }

// Upload functionality
function handleFileUpload(input){
  const file = input.files[0];
  const uploadStatus = document.getElementById('uploadStatus');
  
  if(!file){
    uploadStatus.textContent = '';
    return;
  }
  
  const maxSize = 10 * 1024 * 1024; // 10MB
  if(file.size > maxSize){
    uploadStatus.textContent = '❌ File too large (max 10MB)';
    uploadStatus.style.color = '#dc3545';
    return;
  }
  
  uploadStatus.textContent = `✅ ${file.name} uploaded successfully!`;
  uploadStatus.style.color = '#28a745';
  
  // Scroll to contact form
  setTimeout(() => {
    const contactSection = document.querySelector('#contact');
    if(contactSection){
      contactSection.scrollIntoView({behavior: 'smooth'});
      // Pre-fill the message
      const msgEl = document.getElementById('cMessage');
      if(msgEl){
        msgEl.value = `I uploaded ${file.name} for repair diagnostics. Please review and provide an estimate.`;
      }
    }
  }, 1000);
}

