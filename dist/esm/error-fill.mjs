export const name="error-fill";
export const id="dl_e483b132b1c042d67bab";
export const url=new URL("../icons/error-fill.svg?v=afc716eace9c90ad9cae81bb19c79bbd28e6091a789559f2507c1838ba9780b1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
