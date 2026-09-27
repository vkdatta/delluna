export const name="settings_applications";
export const id="dl_dfa73119f6b9b0f8b933";
export const url=new URL("../icons/settings_applications.svg?v=bb00d9fa287041916a76d41d664eafaf73af9d3390d943c9b068646891418210",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
