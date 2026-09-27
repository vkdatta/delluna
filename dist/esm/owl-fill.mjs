export const name="owl-fill";
export const id="dl_7181ec8ce8d07030d953";
export const url=new URL("../icons/owl-fill.svg?v=13143e42fbac0bac8a71e66acfe9c0e9865ed62c2e4c3784a77b029e82851c96",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
