export const name="lucid_3-pilcrow-right";
export const id="dl_c48607d8e5a14960a476";
export const url=new URL("../icons/lucid_3-pilcrow-right.svg?v=32936efa3079b75de744569d9736dd4c9a55935568bfe59970eeda74d13982c2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
