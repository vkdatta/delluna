export const name="map-pin-simple-light";
export const id="dl_ce35cd7770dd4f90ab87";
export const url=new URL("../icons/map-pin-simple-light.svg?v=9fafedd4b2c555063d18abc31862e67442fd4f556024c87e5fc6be2122328df5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
