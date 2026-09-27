export const name="device-mobile-slash-fill";
export const id="dl_e99dc20109ca4b1fbcc5";
export const url=new URL("../icons/device-mobile-slash-fill.svg?v=5af84eb6d4f782f90766722a6627c18abf6b2d5bc61c3179db7ab7a0afedb754",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
