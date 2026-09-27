export const name="sensors_krx";
export const id="dl_2f68a92af90dc6326aea";
export const url=new URL("../icons/sensors_krx.svg?v=e369881240cccd6a592961220bbe98070bf92ce5a64a25e2d90d3cc973e3d377",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
