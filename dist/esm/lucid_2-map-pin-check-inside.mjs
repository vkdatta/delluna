export const name="lucid_2-map-pin-check-inside";
export const id="dl_c3bf1a6f3f4643bda626";
export const url=new URL("../icons/lucid_2-map-pin-check-inside.svg?v=390f69a9c384738c8976350d8b032e87ad73e3187271fced1daf2e7a29d325bb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
