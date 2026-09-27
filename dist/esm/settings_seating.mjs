export const name="settings_seating";
export const id="dl_dbbd8bf83fa2cb898f0a";
export const url=new URL("../icons/settings_seating.svg?v=db25df71ab53a8de8034658280c78581df51fb75ff2e750b4a56b134c6738882",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
