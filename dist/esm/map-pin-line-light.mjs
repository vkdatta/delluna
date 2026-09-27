export const name="map-pin-line-light";
export const id="dl_f85e78dccfa649af8ea4";
export const url=new URL("../icons/map-pin-line-light.svg?v=c4c4b89d9ce4e10dc7e533bda46459c8ac229bf37f4de0f5ba0cede5e09c1024",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
