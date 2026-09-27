export const name="text-t-slash";
export const id="dl_180566f23da4396c9d44";
export const url=new URL("../icons/text-t-slash.svg?v=8fdb48ee6439282c64e0a619e5943c03e0e75029e387f8b7914be1ae9788701b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
