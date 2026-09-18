export const name="developer_guide";
export const id="dl_bbef1dcbab40488a8ac7";
export const url=new URL("../icons/developer_guide.svg?v=ccb3d300127be2a2cf25594ec54c0f1865dbc7ddbd35855bb9ccdb572f4ffff1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
