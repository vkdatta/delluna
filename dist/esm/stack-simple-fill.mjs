export const name="stack-simple-fill";
export const id="dl_33a13e2456a22a1098a6";
export const url=new URL("../icons/stack-simple-fill.svg?v=0834e70de21bc7770b3cc96499d5fb2ca4728279dde3d46cacb8acd782c647d6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
