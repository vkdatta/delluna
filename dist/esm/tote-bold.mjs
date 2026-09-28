export const name="tote-bold";
export const id="dl_2468112d39f73cbeec7e";
export const url=new URL("../icons/tote-bold.svg?v=184c5828ac6d34509f2ef7135585ca088bee3c5e55cb05cd112fa0982b3838fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
