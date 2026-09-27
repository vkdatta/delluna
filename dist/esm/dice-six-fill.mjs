export const name="dice-six-fill";
export const id="dl_b5f25e556e634eccbe1a";
export const url=new URL("../icons/dice-six-fill.svg?v=3532585deff10fa9b56cf9e1979fd7d8cbdc66fffb1e44ecb6c5eac2af37901f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
