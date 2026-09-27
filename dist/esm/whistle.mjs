export const name="whistle";
export const id="dl_f30d64eed99549b3ad82";
export const url=new URL("../icons/whistle.svg?v=3d9fc9c8e1c11ed94d298e37737f73b1d4c901acbdbf1b3d387cd482eeae1dfe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
