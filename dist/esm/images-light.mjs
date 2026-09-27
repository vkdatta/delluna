export const name="images-light";
export const id="dl_b94bb401499a46b5a5dd";
export const url=new URL("../icons/images-light.svg?v=09a639d4455ab3b2cac20b5e5be45b312d6774f02667551e456aa1346014ce2c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
