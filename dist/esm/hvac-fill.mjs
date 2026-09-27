export const name="hvac-fill";
export const id="dl_dc35a621909411c97b67";
export const url=new URL("../icons/hvac-fill.svg?v=f04366145fa589e6b56f5d9e7d16e4ca71745bd35fd72dffcc637c148fe398fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
