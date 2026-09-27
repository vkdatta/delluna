export const name="map-pin-simple-area-light";
export const id="dl_aae78cc342e748359170";
export const url=new URL("../icons/map-pin-simple-area-light.svg?v=5b454244fece5ed98818eefe90beece61a89172eb172b2f4c25f1a3c52aad87c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
