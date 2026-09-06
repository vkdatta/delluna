export const name="balloon-light";
export const id="dl_3ff46a9a470e4fb3b235";
export const url=new URL("../icons/balloon-light.svg?v=7c5894353f06be19c07b280112192bdef4bd6733cf16a209fd213c93c9108997",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
