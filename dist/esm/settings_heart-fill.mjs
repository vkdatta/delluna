export const name="settings_heart-fill";
export const id="dl_080f13af2e8d76a82fc0";
export const url=new URL("../icons/settings_heart-fill.svg?v=b3114e83177ce392eb115ddf097fd13778d40595f5cabd6f866ac125fed97671",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
