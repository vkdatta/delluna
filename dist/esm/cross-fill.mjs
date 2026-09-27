export const name="cross-fill";
export const id="dl_216208947dd34821a2b2";
export const url=new URL("../icons/cross-fill.svg?v=4ab0a05086bc9a3366b98e5a1fe2b40db67a8bcebc4e4c9e07b3c5e4937e9665",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
