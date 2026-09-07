export const name="caret-circle-down-fill";
export const id="dl_446ae3ea25bc45c1b568";
export const url=new URL("../icons/caret-circle-down-fill.svg?v=eee5237053845a9eca2de68af39e40d15b948cd08a4a444122cf1298d130ec58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
