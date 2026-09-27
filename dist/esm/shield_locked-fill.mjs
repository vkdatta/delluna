export const name="shield_locked-fill";
export const id="dl_d08081ca1ba5bf500552";
export const url=new URL("../icons/shield_locked-fill.svg?v=03c55d43bcf90a304eac6bb682c66a162e90fe28bff5c22baad23eaca83d289c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
