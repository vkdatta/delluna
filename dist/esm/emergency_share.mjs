export const name="emergency_share";
export const id="dl_cb440868757f43b7a1bb";
export const url=new URL("../icons/emergency_share.svg?v=d5bd1d8b3828640a37d41dae8fe3c748b30175e20b0eeb4bb30877f889b11834",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
