export const name="castle";
export const id="dl_97a06a86fc664f9f85fe";
export const url=new URL("../icons/C/castle.svg?v=4da15aeb13bda18182c31bd63797b46b723f95c1f0f169ff19371db01560525a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
