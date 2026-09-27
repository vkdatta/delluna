export const name="power_off";
export const id="dl_81f36b6eee6579265c87";
export const url=new URL("../icons/power_off.svg?v=2078e495411dfa11b450bf4160bc89bc4a1d97954042d55f242f2c7f6e5b9c4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
