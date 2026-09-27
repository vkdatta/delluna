export const name="settings_accessibility-fill";
export const id="dl_2720cfc8c4e578d057be";
export const url=new URL("../icons/settings_accessibility-fill.svg?v=85f2fcda0184f365ab71613b08a945c8dc98c1eb8af2339f63f572160ea03e31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
