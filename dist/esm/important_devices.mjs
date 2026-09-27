export const name="important_devices";
export const id="dl_266829c57cfc0094da56";
export const url=new URL("../icons/important_devices.svg?v=e9da6892df0eb76aa1143b4a397f6e79158f357ebcfa4307196751ff9dfc5346",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
