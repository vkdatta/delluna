export const name="flip-horizontal-duotone";
export const id="dl_f0f188216abf4c9d99d6";
export const url=new URL("../icons/flip-horizontal-duotone.svg?v=6a9eb879676d52c665a6019843f59cb0f1b23fa9b8a3ff107bf26b7bd47186d7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
