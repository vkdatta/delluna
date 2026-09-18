export const name="surgical-fill";
export const id="dl_64e97a6b18664f7698d0";
export const url=new URL("../icons/S/surgical-fill.svg?v=ccd27a9450bdc5ef39e78b1261c460ed85c1096588a358dde7bb422131725ade",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
