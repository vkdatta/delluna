export const name="settings_night_sight";
export const id="dl_81c5f070edba45819558";
export const url=new URL("../icons/S/settings_night_sight.svg?v=7fb86259f896773c0dfaa318a7166dd18843aed21911fdf172eb84f7c742b83c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
