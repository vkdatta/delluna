export const name="modeling-fill";
export const id="dl_387779966bd04ccd76b9";
export const url=new URL("../icons/modeling-fill.svg?v=93b21bd3766ce88584d2ce96318b3593f264f64ca25459a85a5eecb50f673da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
