export const name="dice-two-fill";
export const id="dl_08f126c0e9784e14aff3";
export const url=new URL("../icons/dice-two-fill.svg?v=b7942171da10f38a6778f5424f37b1784a0098b1efe2fd9e0e25d0c1de4e597e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
