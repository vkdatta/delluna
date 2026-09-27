export const name="23mp-fill";
export const id="dl_3f656b985510d9fe7c03";
export const url=new URL("../icons/23mp-fill.svg?v=0f64d73383c56cb83ce112bfa9d937bd4ddcbef76f68e62dd02cb8d0923ef5dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
