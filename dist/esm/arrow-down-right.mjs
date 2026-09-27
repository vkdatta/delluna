export const name="arrow-down-right";
export const id="dl_4e6a9919f5c44a079168";
export const url=new URL("../icons/arrow-down-right.svg?v=8d95e7fee5fa09db2491ae644f63feb80d90886c67bbee209d6f05b545d75140",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
