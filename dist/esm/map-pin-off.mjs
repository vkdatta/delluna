export const name="map-pin-off";
export const id="dl_1451ba342b9d4d2e897f";
export const url=new URL("../icons/map-pin-off.svg?v=1c065529552ad7da6709b75e516209bae44f3986773d731556e3157254e3465a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
