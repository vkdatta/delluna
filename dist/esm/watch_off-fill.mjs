export const name="watch_off-fill";
export const id="dl_d0760b6ae3a772d2e2b3";
export const url=new URL("../icons/watch_off-fill.svg?v=598d2da701cb8e7600bbbec1fcd08b10e71bc2670e1f8d1e83c461e44c21e32c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
