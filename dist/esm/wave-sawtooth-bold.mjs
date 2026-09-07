export const name="wave-sawtooth-bold";
export const id="dl_354e3b7f8fec478ab956";
export const url=new URL("../icons/W/wave-sawtooth-bold.svg?v=e2572f2b0991492ee97d42f6d002762adb54b1d65b3db0afed6169f058550c09",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
