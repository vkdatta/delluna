export const name="three-d-thin";
export const id="dl_d0c81a22de2041a98f9b";
export const url=new URL("../icons/T/three-d-thin.svg?v=34809d972916bd4be9493c4173e2739b5f90b7976496befcae4992cfb91b41ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
