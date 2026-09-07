export const name="globe-hemisphere-west";
export const id="dl_b1ee50cb576d4edd95aa";
export const url=new URL("../icons/globe-hemisphere-west.svg?v=f3bfb061f4b5229afd1101c2b96aaffac3fae84c01d92fc6a22fba9437c1f99a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
