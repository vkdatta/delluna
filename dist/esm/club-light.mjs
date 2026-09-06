export const name="club-light";
export const id="dl_b638933abf3e4fed9b73";
export const url=new URL("../icons/club-light.svg?v=f2a982bb38d222ddbd83e2be8fed523ca4e77e820300cf9b19601bbe347aaf8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
