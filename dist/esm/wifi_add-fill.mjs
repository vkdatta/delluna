export const name="wifi_add-fill";
export const id="dl_7377f4519d5100d23111";
export const url=new URL("../icons/wifi_add-fill.svg?v=003e92573d4417f751be844806999b785318e5db0451865ac87d3f7a22cfd1f0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
