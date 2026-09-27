export const name="note_add-fill";
export const id="dl_03df79907ca86bb55b04";
export const url=new URL("../icons/note_add-fill.svg?v=2d5422d85c5db050a522aba3a7ae5ad35b0e91075b7eaf7906dc2844457d3983",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
