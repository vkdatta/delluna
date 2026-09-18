export const name="settings_motion_mode-fill";
export const id="dl_f8cceb8b398d40489931";
export const url=new URL("../icons/settings_motion_mode-fill.svg?v=c43e14757d42e2005b478c262587adeb9876eaa7e7d1da6d3c467f7fe0fe13ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
