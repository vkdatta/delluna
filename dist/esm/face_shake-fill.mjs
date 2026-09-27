export const name="face_shake-fill";
export const id="dl_0dd521fafdc18ef998eb";
export const url=new URL("../icons/face_shake-fill.svg?v=5bbeb0075ab5f3f9fa8bb3097a8c3edd87393b3acd206eb22388040e5098a2ae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
