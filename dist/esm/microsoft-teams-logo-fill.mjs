export const name="microsoft-teams-logo-fill";
export const id="dl_6c3b84aa2d2c4a3b89cd";
export const url=new URL("../icons/microsoft-teams-logo-fill.svg?v=ef3d9bd1b503ff4ac8a94faf42228ffd4f0a4f7b750677b09c48304b858401f6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
