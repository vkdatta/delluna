export const name="lucid_2-lamp-ceiling";
export const id="dl_74bcf9b73a1146d8b55b";
export const url=new URL("../icons/lucid_2-lamp-ceiling.svg?v=c1d7ed9ba4d237eb0c4451e2363b778ede6c746a50305c13bb9a0f5e8c28ec94",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
