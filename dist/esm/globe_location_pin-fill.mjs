export const name="globe_location_pin-fill";
export const id="dl_7096982931177a990edc";
export const url=new URL("../icons/globe_location_pin-fill.svg?v=f43d9cab3860f39c38ccc28399c4d0fbae5abf0112e0699d1e43b1dee2030281",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
