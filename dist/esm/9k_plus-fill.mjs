export const name="9k_plus-fill";
export const id="dl_014cc009613b95c19989";
export const url=new URL("../icons/9k_plus-fill.svg?v=770569452a43b165a085ce08917d5d3bc81e7c3beeac5dd6e62ac089a9cdc63d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
