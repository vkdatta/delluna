export const name="sensors_off-fill";
export const id="dl_eadab310f6b2150e592c";
export const url=new URL("../icons/sensors_off-fill.svg?v=2aeaeda9c2b376da5cfdd71b758c6e98b31dd2164ecb903101eac6c1e12473aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
