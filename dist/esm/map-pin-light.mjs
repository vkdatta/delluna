export const name="map-pin-light";
export const id="dl_57ec52ed318844bdbbdd";
export const url=new URL("../icons/map-pin-light.svg?v=7a257e8be5893a9b917ca1740c540d256356e78b2dd7894d1ad1a95b86ef6edf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
