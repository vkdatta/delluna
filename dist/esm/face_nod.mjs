export const name="face_nod";
export const id="dl_4877bef40e0b63ace81e";
export const url=new URL("../icons/face_nod.svg?v=1c996ac5cf0459c836e2a9a41e19fad3aec417a37647ab1d227b74e50ba96e5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
