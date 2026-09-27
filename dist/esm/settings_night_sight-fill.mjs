export const name="settings_night_sight-fill";
export const id="dl_542f73910c8eae35ba4e";
export const url=new URL("../icons/settings_night_sight-fill.svg?v=c152a925d8a76b6fb8c48d84e75f13a343863ce1652141020698066521f68885",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
