export const name="lightbulb-filament-fill";
export const id="dl_0106aeda077d41548c40";
export const url=new URL("../icons/lightbulb-filament-fill.svg?v=d6c56627b2d4cf52126bef7df326684ea64155e5d6340c7043ac6c3283bf1f4f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
