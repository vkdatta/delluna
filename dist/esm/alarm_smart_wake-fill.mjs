export const name="alarm_smart_wake-fill";
export const id="dl_258e44915df180d0ba4c";
export const url=new URL("../icons/alarm_smart_wake-fill.svg?v=5f14370647048ed0ffac277f02f15b3683a7ba13c8a180455b21fdb59e60e8d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
