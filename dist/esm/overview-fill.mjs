export const name="overview-fill";
export const id="dl_f4f8b25536f9424aa366";
export const url=new URL("../icons/overview-fill.svg?v=65fde7fefe1a82038bf558436c40ecfb33f2932de4d6cc1d887bffde313fd9fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
