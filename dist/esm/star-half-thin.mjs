export const name="star-half-thin";
export const id="dl_ddc4355c66e748c8a3c5";
export const url=new URL("../icons/S/star-half-thin.svg?v=349c87127ae822bf4f399cc79c32d68370f1b1bccc98f7e2ed4d8d3e1dfd5c42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
