export const name="shadow_add-fill";
export const id="dl_8a5b0d2338602390fa85";
export const url=new URL("../icons/shadow_add-fill.svg?v=f93221026f81461d8495d697c8d3109b9a3be1414f6574cb5022c32eabbe2984",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
