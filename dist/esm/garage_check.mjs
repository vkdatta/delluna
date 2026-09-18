export const name="garage_check";
export const id="dl_9f0efbfdae9c4ba6a421";
export const url=new URL("../icons/G/garage_check.svg?v=ddf232381cc5085618717db0af80e0ae1d2d03e07fcb0eb574c4cc09271ac17f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
