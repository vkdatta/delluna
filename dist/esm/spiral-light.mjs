export const name="spiral-light";
export const id="dl_e9cb6056678a45d59100";
export const url=new URL("../icons/S/spiral-light.svg?v=ec8b4ed1dcc3263a89372f092c43ce50be92ebb861916637389dac9701e2c2cf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
