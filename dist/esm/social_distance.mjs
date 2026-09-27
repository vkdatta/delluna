export const name="social_distance";
export const id="dl_a962a33f77bab0af0d32";
export const url=new URL("../icons/social_distance.svg?v=1f3d373f2b3c90d23bd43f676dd6e102edceb7c4a5b56ada005a951615cc327d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
