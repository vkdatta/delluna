export const name="lucid_3-pointer-off";
export const id="dl_43c70b0349ea40cc825f";
export const url=new URL("../icons/lucid_3-pointer-off.svg?v=aa29d060b6b8fc4e2c35d6a97d0e481476cdb4d207ce546a2f92006836db5a80",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
