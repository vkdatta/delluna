export const name="map-pin-plus-fill";
export const id="dl_b7fdcdbea389424fa917";
export const url=new URL("../icons/map-pin-plus-fill.svg?v=77bc2875ff5f2df7ad6e60640c2552bc2f0310879728978bc7e495b4ab44de6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
