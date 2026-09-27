export const name="transfer_within_a_station-fill";
export const id="dl_bb00aa28e6fdab2f6224";
export const url=new URL("../icons/transfer_within_a_station-fill.svg?v=504f53d9f9fa475df3072533439bf92e6225aa3f133aa64555e728852d295d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
