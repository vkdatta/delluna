export const name="treasure-chest-light";
export const id="dl_ae14626899c4f2951978";
export const url=new URL("../icons/treasure-chest-light.svg?v=03084feee3e2805548286814b5c28910d6dcc199f2c869a0a9fe88c3fe014c93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
