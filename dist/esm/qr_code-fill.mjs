export const name="qr_code-fill";
export const id="dl_f6d4441b07744cb5aeaa";
export const url=new URL("../icons/Q/qr_code-fill.svg?v=886b6306a1e5893a6996e75a7371ee9cfbd4d97adc19bf37e90fcaccb9d74727",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
