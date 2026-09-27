export const name="number-three-thin";
export const id="dl_96d3a1b7d35c4673bb07";
export const url=new URL("../icons/number-three-thin.svg?v=be037433c8edf3940007f2aa20f737a75fd456f471433203ba7b6fd4fe620a2d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
