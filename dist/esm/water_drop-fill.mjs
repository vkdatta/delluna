export const name="water_drop-fill";
export const id="dl_55944dcfd5604190a881";
export const url=new URL("../icons/water_drop-fill.svg?v=dedcce8eb9efb9da99af4533a647666304a47bd44cce76fc29f45fc1bdc91a58",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
