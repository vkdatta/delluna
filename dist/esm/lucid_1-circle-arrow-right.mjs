export const name="lucid_1-circle-arrow-right";
export const id="dl_2cca6dcf344848c083c1";
export const url=new URL("../icons/lucid_1-circle-arrow-right.svg?v=ebbf2782b4a38d1d52cd06e36965a581f02e8957ed44d8e743d9f165acb25035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
