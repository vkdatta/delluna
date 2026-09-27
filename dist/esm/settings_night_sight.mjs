export const name="settings_night_sight";
export const id="dl_1ad6c65d0d46b1119986";
export const url=new URL("../icons/settings_night_sight.svg?v=bcacbafc39fe29a2085c0381f72b17d2d0906b6fb3bbc5846d2ea1cb68eefaf4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
