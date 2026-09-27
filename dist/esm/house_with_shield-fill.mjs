export const name="house_with_shield-fill";
export const id="dl_18b232831ea2c9e4a45d";
export const url=new URL("../icons/house_with_shield-fill.svg?v=d3f1a0636787e5e29f81880846a8adea1e86a469c66abec768dd04c3d8caccc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
