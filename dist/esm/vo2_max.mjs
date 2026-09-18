export const name="vo2_max";
export const id="dl_a1c24969a44d44fbbdc5";
export const url=new URL("../icons/vo2_max.svg?v=8b9a0038578155c8a72b6ea647dd8d8eab05ea1ce821bef8efc6d4b7ab56692c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
