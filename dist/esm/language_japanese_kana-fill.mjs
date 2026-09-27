export const name="language_japanese_kana-fill";
export const id="dl_809627f20e552e6132c2";
export const url=new URL("../icons/language_japanese_kana-fill.svg?v=b01f376e0c8e324330fd0a784a047b2216a3565d3609cb8ed5bb2dcc66d448f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
