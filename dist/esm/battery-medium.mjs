export const name="battery-medium";
export const id="dl_70e6429680ef4cacaa91";
export const url=new URL("../icons/battery-medium.svg?v=356a7d3204c6fa667cf960455d9b57a5af889797565f99733921772e29eabdb5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
