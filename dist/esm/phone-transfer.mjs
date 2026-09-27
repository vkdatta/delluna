export const name="phone-transfer";
export const id="dl_85a7f2f878d34e2f8bfc";
export const url=new URL("../icons/phone-transfer.svg?v=fda2985515731448c1c88f2fc4adbe606627bca20959eea832275c52a0c58b42",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
