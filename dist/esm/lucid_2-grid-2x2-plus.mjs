export const name="lucid_2-grid-2x2-plus";
export const id="dl_ec04de237e7943eeae07";
export const url=new URL("../icons/lucid_2-grid-2x2-plus.svg?v=9d3f831240c4f77fd1327c1f09e1aefad5f7bd179ddc23182ac6b32ebb94d586",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
