export const name="number-square-two-fill";
export const id="dl_c57004296d1c48f19d95";
export const url=new URL("../icons/number-square-two-fill.svg?v=685a44d85d2fa49fe0b8f15c5ca7f9fbc7df68d910ce5c4998b6d6b642bfe01a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
