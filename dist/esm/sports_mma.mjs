export const name="sports_mma";
export const id="dl_7be60274704e4687909d";
export const url=new URL("../icons/sports_mma.svg?v=b5e19a98e9fc69eb2fa78e0bffd1139b11199bb4e213277f391216bccd030a2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
