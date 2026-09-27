export const name="print";
export const id="dl_5e5383f7f3043f3151d5";
export const url=new URL("../icons/print.svg?v=b708541ac0008577a9c6969dd3973d1ae2e91e991e62779a8fcb73fc0000ec69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
