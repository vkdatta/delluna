export const name="scene";
export const id="dl_d14db444104498cf0bdc";
export const url=new URL("../icons/scene.svg?v=3688b6c30d2b864ec63dac6aa3a1e66ab9c3b2128d8724f1cd590910e5d325dd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
