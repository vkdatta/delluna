export const name="shield-chevron-thin";
export const id="dl_ff71b51bdb270549f84b";
export const url=new URL("../icons/shield-chevron-thin.svg?v=1c8f64d59439a17247052f9694465e69ad45c5278f5a7c07e8ed947220be4ac9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
