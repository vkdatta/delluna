export const name="plugs-fill";
export const id="dl_9990da2cdfbb4bad97c9";
export const url=new URL("../icons/plugs-fill.svg?v=173066a618112bf0ea97f23ed1df20c441dd2e214582f6bdc83a0d392f71385e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
