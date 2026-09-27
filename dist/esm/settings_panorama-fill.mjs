export const name="settings_panorama-fill";
export const id="dl_422d97816e1149044de4";
export const url=new URL("../icons/settings_panorama-fill.svg?v=22d287fc09448cb9cc1d295212b995420affd7044de54d061ce71368a0a2e078",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
