export const name="caret-down";
export const id="dl_3cf239937972443f8fcf";
export const url=new URL("../icons/caret-down.svg?v=53f0cf2d0b144ac3cb07e353e0cd0853ffb3ed432d741460ce288edfcb0924b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
