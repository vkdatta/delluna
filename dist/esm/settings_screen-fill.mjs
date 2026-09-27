export const name="settings_screen-fill";
export const id="dl_161a658d2f6be24dae82";
export const url=new URL("../icons/settings_screen-fill.svg?v=58859136d88e7b6a565333b41561adc08297ccb474f434056c49bf8ba449ad46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
