export const name="electric_car-fill";
export const id="dl_7aa44241c92d11c76bc7";
export const url=new URL("../icons/electric_car-fill.svg?v=e88a112b938ac69f227f50c4a16d0f03bef2f49ebaa4c45f949c28d627648e93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
