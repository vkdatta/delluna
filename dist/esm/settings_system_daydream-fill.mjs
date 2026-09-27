export const name="settings_system_daydream-fill";
export const id="dl_81d269f6bc7f2957379d";
export const url=new URL("../icons/settings_system_daydream-fill.svg?v=224ed2101c7ed2f0c4cc181a496ecd39b91ce99d0af243134fb3f78388c9e443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
