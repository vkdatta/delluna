export const name="tab_duplicate";
export const id="dl_73d28126928e6d3cd767";
export const url=new URL("../icons/tab_duplicate.svg?v=8361d6e3a5356478626d50505e23899136d0173e411fc4c58c22a793baa57e03",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
