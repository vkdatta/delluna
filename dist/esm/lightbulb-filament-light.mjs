export const name="lightbulb-filament-light";
export const id="dl_658122f4508a4d0592d2";
export const url=new URL("../icons/lightbulb-filament-light.svg?v=47455fff63de7606b2b4dec71285937ea4dc400945964495d8570dadfe30d3dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
