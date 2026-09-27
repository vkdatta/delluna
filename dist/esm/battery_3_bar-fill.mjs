export const name="battery_3_bar-fill";
export const id="dl_f92c71c6547a195038e0";
export const url=new URL("../icons/battery_3_bar-fill.svg?v=395b6ccbeb802265f63a7e3f34c58177fb9001f06f7a0d000befec716627b98e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
