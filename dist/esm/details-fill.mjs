export const name="details-fill";
export const id="dl_0926cdb8096f8115e7dd";
export const url=new URL("../icons/details-fill.svg?v=eef92cb6c80e36415fb5a17668a40b1946489351cd8507aba1b4e11e8dbede5a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
