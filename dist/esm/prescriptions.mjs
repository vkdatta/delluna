export const name="prescriptions";
export const id="dl_d8649cce7280d55730c3";
export const url=new URL("../icons/prescriptions.svg?v=eca280cfbcc47503cbeef0be47d0d2159c889b3360260bed513bcd4291210224",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
