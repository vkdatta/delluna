export const name="cash-register-duotone";
export const id="dl_0e0d89f956454cbaa21b";
export const url=new URL("../icons/cash-register-duotone.svg?v=303fcdead9e78b14ea52e0a22923bfb0e88dce2bd8d146e0e7e1c986d7032bf6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
