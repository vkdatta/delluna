export const name="caret-circle-down-bold";
export const id="dl_15db6b35db134409a1ee";
export const url=new URL("../icons/caret-circle-down-bold.svg?v=4b591108fe377c8864d5f1b0272015a11b25eef2d991923164dbe81b2cec1065",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
