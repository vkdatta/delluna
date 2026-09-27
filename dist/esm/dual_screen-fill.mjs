export const name="dual_screen-fill";
export const id="dl_2a5d1574f094dac04df5";
export const url=new URL("../icons/dual_screen-fill.svg?v=8b6578bae2d6891f7f2d5cbadfc98445adaf3a47fecdc651362be2eecc130f38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
