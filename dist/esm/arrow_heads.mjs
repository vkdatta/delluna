export const name="arrow_heads";
export const id="dl_2f9959b689bb425280a1";
export const url=new URL("../icons/arrow_heads.svg?v=c9b45081d6e6c2a798c64124dc5fa668d8616fd9864a6362ee787ed79b55a11a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
