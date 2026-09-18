export const name="passkey-fill";
export const id="dl_3c11346a1f114397b03d";
export const url=new URL("../icons/passkey-fill.svg?v=7a01eca4dfec3dda84d769ba8358496d2377e70ac13fc23d4ae07a42867f4e4e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
