export const name="list-dashes-bold";
export const id="dl_cfa70d3575f349fd80e2";
export const url=new URL("../icons/list-dashes-bold.svg?v=19cfd3b2c8344097288f760d5a6cdd0d33cd53c2128750874e62bcb50228aa24",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
