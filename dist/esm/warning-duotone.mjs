export const name="warning-duotone";
export const id="dl_9a6ccb11810b07156ea4";
export const url=new URL("../icons/warning-duotone.svg?v=e0ce9e9fc30a56e89339194d8a4decb6eb976116ec5a2421312dd0d5ee48e951",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
