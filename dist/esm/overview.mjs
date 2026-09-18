export const name="overview";
export const id="dl_dd8807d4b84643d1b785";
export const url=new URL("../icons/O/overview.svg?v=95e143b9e5708aaea271ade652eb72c5f3930ca015d31ac7e901ead9d13e9746",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
