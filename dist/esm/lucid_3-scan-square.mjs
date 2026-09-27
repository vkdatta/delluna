export const name="lucid_3-scan-square";
export const id="dl_b23fa8def5a744b092b6";
export const url=new URL("../icons/lucid_3-scan-square.svg?v=eeffb130f8aa8543727d59d9e9d9671b4610facb4f446283fbd060d390ac7007",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
