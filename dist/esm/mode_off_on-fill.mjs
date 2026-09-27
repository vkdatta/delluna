export const name="mode_off_on-fill";
export const id="dl_5038c90e49cf6ce59118";
export const url=new URL("../icons/mode_off_on-fill.svg?v=799d167c8c19bb7029aa955cb014c307a0ee1ca9faca9ec9de3788f05533116b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
