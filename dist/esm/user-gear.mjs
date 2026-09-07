export const name="user-gear";
export const id="dl_a685da6c2e4e43fdaf00";
export const url=new URL("../icons/U/user-gear.svg?v=4091ced4f8297dbcd12a2b1993b0081667f6cdf9dbb31d1606543bd66ddb9bcc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
