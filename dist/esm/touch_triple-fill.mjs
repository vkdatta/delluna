export const name="touch_triple-fill";
export const id="dl_79e93ebc63d625f41e25";
export const url=new URL("../icons/touch_triple-fill.svg?v=8a64b3df62e3f04d5629b96593061c28ef226f6d1e2dacc61d36caf27ca4392c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
