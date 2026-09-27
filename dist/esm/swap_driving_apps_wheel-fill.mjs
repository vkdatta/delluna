export const name="swap_driving_apps_wheel-fill";
export const id="dl_03d6280c72f9250f4fd0";
export const url=new URL("../icons/swap_driving_apps_wheel-fill.svg?v=d4e0f6a189989bccb9fc47ab41c37f53cc95a99582a874d5626d5c69eaddde38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
