export const name="map-pin-plus-fill";
export const id="dl_b7fdcdbea389424fa917";
export const url=new URL("../icons/map-pin-plus-fill.svg?v=9c72b915bd4370f87edf1999d3d12c021ab53206dbdd740c7d796e52f1504010",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
