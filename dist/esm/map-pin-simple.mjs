export const name="map-pin-simple";
export const id="dl_76c382afe89e496fb580";
export const url=new URL("../icons/map-pin-simple.svg?v=72b123b67ca601fc95d5eff9b568f675c8b00e183f01aefcb2d561c6fe9dc418",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
