export const name="filter_1";
export const id="dl_c1ea05c01206c5d3f91b";
export const url=new URL("../icons/filter_1.svg?v=d1918ecf29e412a8e8b2a8d6b97fc25f2e184a205e1670bedcad80b420c3f6fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
