export const name="settings_alert";
export const id="dl_69867fdd8a0ec09012ff";
export const url=new URL("../icons/settings_alert.svg?v=349b4756beba91563f6d1902c206aa2889b0fe8aedee0ffd46c930baf2a08bc9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
