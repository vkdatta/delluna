export const name="cloud-lightning-thin";
export const id="dl_ee9663f6a9244721826a";
export const url=new URL("../icons/cloud-lightning-thin.svg?v=b1d5391dd082e743843131abbf185c8567089fdc95c259a707d626f4987235d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
