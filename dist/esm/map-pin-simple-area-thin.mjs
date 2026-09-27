export const name="map-pin-simple-area-thin";
export const id="dl_d3f0f84fe09547cdb9a7";
export const url=new URL("../icons/map-pin-simple-area-thin.svg?v=e7ef2b0635b03c704c8e395a67c0fac6469aa0423dc5d67f779375006d1e6245",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
