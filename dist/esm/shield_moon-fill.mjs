export const name="shield_moon-fill";
export const id="dl_97ea6951d44b2606ab02";
export const url=new URL("../icons/shield_moon-fill.svg?v=428918199e9681a40817fc7ad7809a684382e34f16b90f0f18f07616661ecee1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
