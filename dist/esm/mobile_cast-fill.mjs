export const name="mobile_cast-fill";
export const id="dl_1cecfbb160224dbfa69c";
export const url=new URL("../icons/M/mobile_cast-fill.svg?v=fdf92194a8a14f392b7505785e19097e68895b01aa2c75f9a81c92cb472f6bcf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
