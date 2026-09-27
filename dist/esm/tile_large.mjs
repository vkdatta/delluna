export const name="tile_large";
export const id="dl_06a2d3901cc2c98ca893";
export const url=new URL("../icons/tile_large.svg?v=53f83800fa59966bebedc5c519419526ee1127c0837961868835fae32949178d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
