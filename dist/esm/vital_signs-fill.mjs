export const name="vital_signs-fill";
export const id="dl_f4cfd48523a0ec95ada5";
export const url=new URL("../icons/vital_signs-fill.svg?v=195fb7256febdff0ef79a1b2e61ab043623f71d16893c32648acd6191df7834f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
