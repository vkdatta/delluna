export const name="battery_change-fill";
export const id="dl_464c7c020817a8eb3ae7";
export const url=new URL("../icons/battery_change-fill.svg?v=3fbe69338c97077ed83d5b165f4a6550ee8394851bfc9944c984decfcc942b56",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
