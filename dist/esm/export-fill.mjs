export const name="export-fill";
export const id="dl_615a5c266da1433eb7ff";
export const url=new URL("../icons/export-fill.svg?v=e7c67fcfea122ea31e912196a3a745adeab97044681ed06c022dea67597055c7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
