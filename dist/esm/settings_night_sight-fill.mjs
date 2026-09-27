export const name="settings_night_sight-fill";
export const id="dl_8933979bee45c9e2d501";
export const url=new URL("../icons/settings_night_sight-fill.svg?v=7095a48949eb9857a6e847248a09b82f4edf57a4308fc4b85e41685ec9cb2567",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
