export const name="exclude-square-fill";
export const id="dl_f99eef81d09d4081841c";
export const url=new URL("../icons/exclude-square-fill.svg?v=3556e99dafd16257888bb8ae072b1f159b91d3daae989ff617ff8a908b313d10",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
