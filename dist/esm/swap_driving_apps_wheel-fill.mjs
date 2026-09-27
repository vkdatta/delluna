export const name="swap_driving_apps_wheel-fill";
export const id="dl_cc777980d989e522cd07";
export const url=new URL("../icons/swap_driving_apps_wheel-fill.svg?v=98208a055de5720a048f7ed52f06502fa411aa14c8b6c8f29d91422d0bd07a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
