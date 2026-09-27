export const name="screen_search_desktop";
export const id="dl_85588cfa94fbe7e62902";
export const url=new URL("../icons/screen_search_desktop.svg?v=b590c87e7ada5e8b78cd4394372c178ff45797d79ca2f0023f26fa405df1049a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
