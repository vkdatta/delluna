export const name="devices_off";
export const id="dl_f997ce1b9a5de776c4ab";
export const url=new URL("../icons/devices_off.svg?v=0d975985846026b2d5771aa0383dedd0822d7e2c004b859ce625bba88380e793",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
