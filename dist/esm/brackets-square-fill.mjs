export const name="brackets-square-fill";
export const id="dl_4504c3228e9841dfb2b2";
export const url=new URL("../icons/brackets-square-fill.svg?v=387eb31ddaaecd645f15d88ed460f21c4fa6f75d1094157fe3b56b388ad05b25",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
