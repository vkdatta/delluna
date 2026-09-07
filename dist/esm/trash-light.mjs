export const name="trash-light";
export const id="dl_dbd0f60838eb45728f62";
export const url=new URL("../icons/T/trash-light.svg?v=66c779b57b990777b9f2d311d5957b19269ccf9f79d73c5eed6d0f6a2aae3370",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
