export const name="lucid_1-battery-warning";
export const id="dl_d015667e51d74fe5ad98";
export const url=new URL("../icons/lucid_1-battery-warning.svg?v=9ad3bbd87d4ab1c52fb7a0592501cca873112201dca8a6b8acbc08c513d0ece6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
