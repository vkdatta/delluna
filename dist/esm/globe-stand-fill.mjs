export const name="globe-stand-fill";
export const id="dl_a20c84183cc14afd9a24";
export const url=new URL("../icons/globe-stand-fill.svg?v=91297dea2c84b27c13bc21afd427fa82042df9f86df6028040fbce93169242b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
