export const name="folder_delete";
export const id="dl_e341d70df5614039874f";
export const url=new URL("../icons/F/folder_delete.svg?v=471a90f4607cf656fc88d910c2a05fccc805ccfa36cae52ee0f5d992927bdbfa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
