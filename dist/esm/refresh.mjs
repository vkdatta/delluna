export const name="refresh";
export const id="dl_f01e74e15578de715330";
export const url=new URL("../icons/material_symbols/refresh.svg?v=c431a3240c81200fad0addd6eb87a61869267c181c780a743e7988a86a10a3a4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
