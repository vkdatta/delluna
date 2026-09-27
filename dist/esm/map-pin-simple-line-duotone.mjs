export const name="map-pin-simple-line-duotone";
export const id="dl_4d0a89d7c19e40beb626";
export const url=new URL("../icons/map-pin-simple-line-duotone.svg?v=ad769ae26717898f2adcab5bb749b2a03e7fe2dd0aeccdc95c12f951eeee9047",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
