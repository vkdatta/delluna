export const name="gite-fill";
export const id="dl_860a22baa0e1459496c2";
export const url=new URL("../icons/gite-fill.svg?v=0133b0392cb97a45a2aca31d3a86206fb96e99815f87eda394e603636e97b320",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
