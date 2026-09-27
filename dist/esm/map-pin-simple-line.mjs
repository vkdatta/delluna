export const name="map-pin-simple-line";
export const id="dl_77d930586333432b9162";
export const url=new URL("../icons/map-pin-simple-line.svg?v=923d78d312bbe7f32c1e4ddf16eaea6c7c820c956253da54bce51409a462d234",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
