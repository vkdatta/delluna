export const name="eraser_size_1";
export const id="dl_f31bce04f3b940ebbf87";
export const url=new URL("../icons/eraser_size_1.svg?v=66ac0a6b801ea99827bc891bb7d0237c4b29b2b8da6a09e9c15bdc48c4049a61",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
