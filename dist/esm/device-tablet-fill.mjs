export const name="device-tablet-fill";
export const id="dl_612554495e744c30a37b";
export const url=new URL("../icons/device-tablet-fill.svg?v=2d1bbc6f366c11889f2fdad8f143eab3050c886c347551b53cc653678d597dca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
