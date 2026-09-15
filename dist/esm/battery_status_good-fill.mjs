export const name="battery_status_good-fill";
export const id="dl_fadb6f22dc954c0491ef";
export const url=new URL("../icons/B/battery_status_good-fill.svg?v=cb58d987691ee2fac6c663a2e377c3d8d03e6aa8865c87bca042fde4cf629eaa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
