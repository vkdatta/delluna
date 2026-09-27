export const name="autopause-fill";
export const id="dl_76a4eae2700c25ff9ca4";
export const url=new URL("../icons/autopause-fill.svg?v=15320b005b86d2f9c22eda385491d8dedb97b2ef9c8301afaa5c6bacc031f627",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
