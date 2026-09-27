export const name="square-dimensions";
export const id="dl_fb75ab4ee9d042029282";
export const url=new URL("../icons/square-dimensions.svg?v=ac0b5cf9d0dbc1eff14590e93140517442fc2dd67b845d23ed5b2d78456a25ce",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
