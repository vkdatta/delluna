export const name="smoking_rooms-fill";
export const id="dl_9bd9712e06c64714a334";
export const url=new URL("../icons/smoking_rooms-fill.svg?v=18da773dce7b8f37ee4e00d0cde4082f6b91e081fe2a664c2e51e7f78dc8dbbb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
