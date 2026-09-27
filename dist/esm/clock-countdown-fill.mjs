export const name="clock-countdown-fill";
export const id="dl_23ab867ef725483d9783";
export const url=new URL("../icons/clock-countdown-fill.svg?v=33e3d997e7a907db09a27886335e586f7fab837f908def5cd5b4c16b51c4a959",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
