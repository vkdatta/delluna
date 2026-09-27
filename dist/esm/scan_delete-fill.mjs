export const name="scan_delete-fill";
export const id="dl_172d1d699b06b3a426fd";
export const url=new URL("../icons/scan_delete-fill.svg?v=a5554b61fc3805e6681348f911a50981e2c8e0bd41ed267cc110bd921ea2711a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
