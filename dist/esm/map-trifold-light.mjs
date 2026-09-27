export const name="map-trifold-light";
export const id="dl_dff66ee43c1b43c69909";
export const url=new URL("../icons/map-trifold-light.svg?v=925044bcee20665abbaca7a289b1c1b15692318d3ede55062da8b0ff49dec9d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
