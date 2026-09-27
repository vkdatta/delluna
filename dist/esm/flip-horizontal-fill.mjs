export const name="flip-horizontal-fill";
export const id="dl_8079800abe014e3885c8";
export const url=new URL("../icons/flip-horizontal-fill.svg?v=4a34864488cd6db669976eb32cd511615dba5e5c5a9dddba1a33324a8b1635e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
