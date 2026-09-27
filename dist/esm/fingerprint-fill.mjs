export const name="fingerprint-fill";
export const id="dl_3e2d2a8aa72a435ab50f";
export const url=new URL("../icons/fingerprint-fill.svg?v=6547b69e4fd68fa2639ae39fe6452b67dd8b50c96685b2f4c92288bbc9ee573a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
