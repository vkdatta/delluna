export const name="arrow-bend-right-up";
export const id="dl_2abc7f97d9014c8d809c";
export const url=new URL("../icons/arrow-bend-right-up.svg?v=65b16508f753645a7a7d3286113468b15cd1dd3cdc9f26704a6ed3d5f6946b84",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
