export const name="delivery_truck_speed";
export const id="dl_76577ea55c1e416f888f";
export const url=new URL("../icons/D/delivery_truck_speed.svg?v=246e1141148b24900cafb5d0419278d15c51fb77c194b8f2ecb2a21b1113f0e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
