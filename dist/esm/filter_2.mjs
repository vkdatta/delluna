export const name="filter_2";
export const id="dl_e19b6f6c73571c7198cd";
export const url=new URL("../icons/filter_2.svg?v=e0492316a9dbc3b76d787fa0831a541d93cf2a2ebf0f8277c6ffe05789217f28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
