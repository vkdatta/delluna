export const name="log-duotone";
export const id="dl_6f422cde8c4641af906d";
export const url=new URL("../icons/log-duotone.svg?v=b767d848c8016724a130ba7cf2d1b15073df02004a11154dd7b82ec7a2dc4f71",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
