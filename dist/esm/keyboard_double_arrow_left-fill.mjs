export const name="keyboard_double_arrow_left-fill";
export const id="dl_266d09f24088ebbcb2ce";
export const url=new URL("../icons/keyboard_double_arrow_left-fill.svg?v=70f2b9671e2c0df48c2d063fde3720f8c6790dd9a807691feeebd1fb125982ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
