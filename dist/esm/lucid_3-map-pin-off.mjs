export const name="lucid_3-map-pin-off";
export const id="dl_1451ba342b9d4d2e897f";
export const url=new URL("../icons/lucid_3-map-pin-off.svg?v=20bf09075ac36e06c5d7697f08568bd32a30492cc57d227f4d18a1884607339f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
