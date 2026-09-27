export const name="oven-thin";
export const id="dl_2c7ee2d1a2044dcf8083";
export const url=new URL("../icons/oven-thin.svg?v=33df59f0b40e83f72d2509665def80e144071497943012407cc50ba04d3300ed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
