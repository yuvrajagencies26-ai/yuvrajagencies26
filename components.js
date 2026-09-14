'use strict';
(() => {
  const qs=(s,r=document)=>r.querySelector(s), qsa=(s,r=document)=>[...r.querySelectorAll(s)];
  const whatsappSvg='<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M19.11 17.24c-.26-.13-1.53-.76-1.77-.84-.24-.09-.41-.13-.59.13-.17.26-.67.84-.82 1.01-.15.17-.3.2-.56.07-.26-.13-1.09-.4-2.08-1.29-.77-.69-1.29-1.54-1.44-1.8-.15-.26-.02-.4.11-.53.12-.12.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.59-1.42-.8-1.94-.21-.51-.43-.44-.59-.45h-.5c-.17 0-.45.06-.69.32-.24.26-.91.89-.91 2.17s.93 2.52 1.06 2.69c.13.17 1.83 2.8 4.44 3.93.62.27 1.1.43 1.48.55.62.2 1.19.17 1.64.1.5-.08 1.53-.63 1.75-1.23.22-.61.22-1.13.15-1.23-.06-.11-.24-.17-.5-.3zM16.04 4.8c-6.12 0-11.1 4.96-11.1 11.08 0 1.95.51 3.86 1.48 5.54L4.85 27.2l5.92-1.55a11.1 11.1 0 0 0 5.26 1.34h.01c6.12 0 11.1-4.97 11.1-11.09 0-2.96-1.15-5.75-3.25-7.84A11.02 11.02 0 0 0 16.04 4.8zm0 20.31h-.01a9.2 9.2 0 0 1-4.69-1.28l-.34-.2-3.51.92.94-3.42-.22-.35a9.2 9.2 0 0 1-1.41-4.9c0-5.1 4.15-9.22 9.24-9.22 2.47 0 4.79.96 6.54 2.7a9.18 9.18 0 0 1 2.71 6.54c0 5.09-4.15 9.22-9.25 9.22z"/></svg>';
  const callSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6.62 10.79a15.46 15.46 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg>';
  const mailSvg='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg>';

  function enhanceThemeToggle(){
    const t=qs('#themeToggle'); if(!t) return;
    t.classList.add('theme-switch');
    t.innerHTML='<span class="theme-sky" aria-hidden="true"><span class="theme-stars"></span><span class="theme-cloud"></span><span class="theme-orb"></span></span>';
    t.title='Toggle light / dark theme';
  }

  function enhanceWhatsApp(){
    qsa('.header-chat').forEach(a=>{a.innerHTML=whatsappSvg+'<span class="wa-text">WhatsApp</span>';});
  }

  function addSparkBursts(){
    qsa('.hero .actions .button,.collection-mega-cta,.collection-section-cta,.journey .button,.celebrate-banner .button,.contact-card .button,.pdf-primary,.enquiry-pdf-button,#quickCartWhatsApp,#customerForm button[type="submit"]').forEach(btn=>{
      if(btn.querySelector('.cta-spark')) return;
      btn.classList.add('spark-cta');
      for(let i=0;i<6;i++){const s=document.createElement('i');s.className='cta-spark';s.setAttribute('aria-hidden','true');btn.appendChild(s);}btn.classList.add('uiverse-starburst');for(let i=1;i<=6;i++){const star=document.createElement('span');star.className='u-star u-star-'+i;star.setAttribute('aria-hidden','true');btn.appendChild(star);}
    });
  }

  function addGlassTreatment(){
    qsa('.hero-art,.contact-card,.enquiry-layout .panel,.payment-help').forEach(el=>el.classList.add('glass-blob'));
  }

  function addQuickContacts(){
    const footerCols=qsa('.footer-grid > div'); if(footerCols.length<3 || qs('.quick-contact')) return;
    const col=footerCols[2];
    const existingWa=qs('[data-wa][href]');
    const waHref=existingWa?.href || '#';
    const list=document.createElement('div');
    list.className='quick-contact'; list.setAttribute('aria-label','Quick contact');
    list.innerHTML=`<a class="qc-icon qc-whatsapp" href="${waHref}" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"><span class="tooltip">WhatsApp</span>${whatsappSvg}</a><a class="qc-icon qc-call" href="tel:+916374329677" aria-label="Call"><span class="tooltip">Call us</span>${callSvg}</a><a class="qc-icon qc-mail" href="mailto:rengarajrengaraj0179@gmail.com" aria-label="Email"><span class="tooltip">Email us</span>${mailSvg}</a>`;
    col.appendChild(list);
  }

  function installQuickView(){
    const toolbar=qs('.toolbar'); if(!toolbar || qs('.catalogue-quickbar')) return;
    const bar=document.createElement('div');
    bar.className='catalogue-quickbar';
    bar.innerHTML=`<span>Quick view</span><div class="quick-view-glider" role="radiogroup" aria-label="Quick product filter"><input type="radio" id="quick-all" name="quick-view" value="all" checked><label for="quick-all">All products</label><input type="radio" id="quick-available" name="quick-view" value="available"><label for="quick-available">Available</label><input type="radio" id="quick-saved" name="quick-view" value="saved"><label for="quick-saved">Saved</label><div class="glider-track" aria-hidden="true"><div class="glider"></div></div></div>`;
    toolbar.parentNode.insertBefore(bar,toolbar);
    const availability=qs('#availabilityFilter'), saved=qs('#favoritesToggle');
    const setSaved=want=>{const isSaved=saved?.getAttribute('aria-pressed')==='true'; if(saved && isSaved!==want) saved.click();};
    bar.addEventListener('change',e=>{
      if(!e.target.matches('input[name="quick-view"]'))return;
      if(e.target.value==='all'){setSaved(false); if(availability){availability.value='all'; availability.dispatchEvent(new Event('change',{bubbles:true}));}}
      if(e.target.value==='available'){setSaved(false); if(availability){availability.value='available'; availability.dispatchEvent(new Event('change',{bubbles:true}));}}
      if(e.target.value==='saved'){if(availability){availability.value='all'; availability.dispatchEvent(new Event('change',{bubbles:true}));} setSaved(true);}
    });
    const sync=()=>{
      const savedOn=saved?.getAttribute('aria-pressed')==='true';
      const val=savedOn?'saved':availability?.value==='available'?'available':'all';
      const radio=qs(`#quick-${val}`); if(radio) radio.checked=true;
    };
    availability?.addEventListener('change',sync); saved?.addEventListener('click',()=>requestAnimationFrame(sync)); qs('#resetFilters')?.addEventListener('click',()=>requestAnimationFrame(sync));
  }

  function addPdfAccess(){
    if(!qs('.pdf-header-link')){
      const actions=qs('.nav-actions');
      if(actions){
        const link=document.createElement('a');
        link.className='pdf-header-link';
        link.href='renga%202026.pdf'; link.target='_blank'; link.rel='noopener';
        link.setAttribute('aria-label','Open 2026 price list PDF');
        link.innerHTML='<span class="pdf-mini-badge">PDF</span><span class="pdf-header-text">Price List</span>';
        const wa=qs('.header-chat',actions);
        actions.insertBefore(link,wa||actions.firstChild);
      }
    }
    if(!qs('.pdf-floating')){
      const link=document.createElement('a');
      link.className='pdf-floating'; link.href='renga%202026.pdf'; link.target='_blank'; link.rel='noopener';
      link.setAttribute('aria-label','View or download 2026 price list PDF');
      link.innerHTML='<span class="pdf-float-icon">PDF</span><span><b>2026 Price List</b><small>View / Download</small></span>';
      document.body.appendChild(link);
    }
  }

  function installEnquiryStepper(){
    const layout=qs('.enquiry-layout'), cart=qs('#cartPanel'), form=qs('#customerForm');
    if(!layout || !cart || !form || qs('.enquiry-step-shell')) return;
    const shell=document.createElement('section');
    shell.className='container enquiry-step-shell';
    shell.setAttribute('aria-label','Enquiry progress');
    shell.innerHTML=`<div class="enquiry-step-copy"><span>QUICK JOURNEY</span><strong>Build → Details → Send</strong><small>Jump between the three enquiry steps.</small></div><div class="enquiry-step-rail" role="radiogroup" aria-label="Enquiry steps"><input type="radio" id="journey-products" name="journey-step" value="products" checked><label for="journey-products"><b>01</b><span>Products<small>Review cart</small></span></label><input type="radio" id="journey-details" name="journey-step" value="details"><label for="journey-details"><b>02</b><span>Details<small>Your contact</small></span></label><input type="radio" id="journey-send" name="journey-step" value="send"><label for="journey-send"><b>03</b><span>Send<small>WhatsApp / PDF</small></span></label><div class="glider-container" aria-hidden="true"><div class="glider"></div></div></div>`;
    layout.parentNode.insertBefore(shell,layout);
    shell.addEventListener('change',e=>{
      if(!e.target.matches('input[name="journey-step"]')) return;
      const value=e.target.value;
      if(value==='products') cart.scrollIntoView({behavior:'smooth',block:'start'});
      if(value==='details'){form.scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>qs('#customerName')?.focus({preventScroll:true}),450);}
      if(value==='send'){form.scrollIntoView({behavior:'smooth',block:'center'});setTimeout(()=>qs('#customerForm button[type="submit"]')?.focus({preventScroll:true}),450);}
    });
    const sync=()=>{
      const formTop=form.getBoundingClientRect().top;
      const trigger=innerHeight*.48;
      const val=formTop<trigger?'details':'products';
      const radio=qs('#journey-'+val); if(radio && !qs('#journey-send')?.checked) radio.checked=true;
    };
    addEventListener('scroll',sync,{passive:true});
  }

  function addMicroInteractions(){
    // Keep dynamic cards enhanced after every app render without touching app.js.
    const grids=qsa('#productGrid,#featuredGrid,#cartItems,#productDetail').filter(Boolean);
    if(!grids.length) return;
    const observer=new MutationObserver(()=>{qsa('.product-card').forEach(card=>card.setAttribute('data-premium-card',''));});
    grids.forEach(g=>observer.observe(g,{childList:true,subtree:true}));
    qsa('.product-card').forEach(card=>card.setAttribute('data-premium-card',''));
  }

  enhanceThemeToggle(); enhanceWhatsApp(); addPdfAccess(); addSparkBursts(); addGlassTreatment(); addQuickContacts(); installQuickView(); installEnquiryStepper(); addMicroInteractions();
})();
