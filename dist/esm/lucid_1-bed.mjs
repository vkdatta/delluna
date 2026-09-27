export const name="lucid_1-bed";
export const id="dl_f336cc0b84144c529b3e";
export const url=new URL("../icons/lucid_1-bed.svg?v=695fd6943226405cc5314f3fdac8586036ff3648be894bc627639e4526476bc4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
