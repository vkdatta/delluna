export const name="margin";
export const id="dl_a5561da4d2ed03e4cf03";
export const url=new URL("../icons/margin.svg?v=a0c03ab20a780a50f7b21f95553fd4c24c4f27ed93d0cc8d69ba613473f7583e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
