export const name="fork-knife-light";
export const id="dl_8b2aeacbaed24afd816b";
export const url=new URL("../icons/fork-knife-light.svg?v=786bd403390964aa098bc506e4e78a7ecfc3c4813a280d2917caa8dd82b46388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
