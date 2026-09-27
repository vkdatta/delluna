export const name="map-pin-light";
export const id="dl_57ec52ed318844bdbbdd";
export const url=new URL("../icons/map-pin-light.svg?v=d4a872681e8770669e119656a9ead60b5dee860c02b115372240c72ef1f2d077",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
