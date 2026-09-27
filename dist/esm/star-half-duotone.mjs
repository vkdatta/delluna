export const name="star-half-duotone";
export const id="dl_40ab8f597574f920cc91";
export const url=new URL("../icons/star-half-duotone.svg?v=4d88218e593f92d6d3d4cf8add4a473375401f5230df0c395041a6928535eadd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
