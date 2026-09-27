export const name="map_pin_review-fill";
export const id="dl_e31511f8b9c069a4c3c9";
export const url=new URL("../icons/map_pin_review-fill.svg?v=2629d0e17b271231d8e5163762066bac321454309bcc089ffa5f1e0db0832e35",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
