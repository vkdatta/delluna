export const name="settings_alert";
export const id="dl_03c82068e99099b7bb18";
export const url=new URL("../icons/settings_alert.svg?v=fadce6d3ea92744fb18d1c6c868919c33d4a811fd03d4104358d9d12034ce9a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
