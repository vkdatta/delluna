export const name="sync_saved_locally_off";
export const id="dl_e260f14c25934c6195dd";
export const url=new URL("../icons/S/sync_saved_locally_off.svg?v=eb6b4c6ce1c0a0fabaac08b8c67c4eb2e8f3c9b2e40bf8069dec3c39e53ef82e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
