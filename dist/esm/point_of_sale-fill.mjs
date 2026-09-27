export const name="point_of_sale-fill";
export const id="dl_986db40e13e63be95e8f";
export const url=new URL("../icons/point_of_sale-fill.svg?v=bdaea62d3e83bed404828c447960f4f42ee73ef0cf6bcb34e2081587dc8b0761",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
