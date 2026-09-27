export const name="arrow-square-up-right-fill";
export const id="dl_beb9b39691474a7bb81e";
export const url=new URL("../icons/arrow-square-up-right-fill.svg?v=9ce4c42d3d2f43a2bac5cbcb4951ef8b2aeeac0044e2fd2453f22e54d83221c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
