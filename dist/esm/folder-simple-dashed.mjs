export const name="folder-simple-dashed";
export const id="dl_8a89d29cb964493cb5a9";
export const url=new URL("../icons/folder-simple-dashed.svg?v=f7df95127c7f0bf6169b1d12ba8745e5a62929510a708ba133ed79940b68f11c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
