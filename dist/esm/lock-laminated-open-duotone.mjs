export const name="lock-laminated-open-duotone";
export const id="dl_b66fc4d137554622a098";
export const url=new URL("../icons/lock-laminated-open-duotone.svg?v=8854833dd1da797c2100efd00be2f7aa117a89bb523858f2ecd47315fc379f40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
