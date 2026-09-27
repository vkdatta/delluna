export const name="settings_night_sight";
export const id="dl_1c1b3482d20d78eca488";
export const url=new URL("../icons/settings_night_sight.svg?v=7fb86259f896773c0dfaa318a7166dd18843aed21911fdf172eb84f7c742b83c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
