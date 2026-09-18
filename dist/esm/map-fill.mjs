export const name="map-fill";
export const id="dl_37aa88c65f694a28ac05";
export const url=new URL("../icons/map-fill.svg?v=f6406bb3564fbac921eeedd43002ccb7e44b9d52e61069e54be6dab5ea9ccf2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
