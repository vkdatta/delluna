export const name="lucid_1-clock-6";
export const id="dl_fccce8e2393947adb08e";
export const url=new URL("../icons/lucid_1-clock-6.svg?v=d318023860dca816652a1cf02e7a3276ed5b6fabe928743512527ad81aa10dd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
