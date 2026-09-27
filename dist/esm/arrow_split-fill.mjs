export const name="arrow_split-fill";
export const id="dl_d2580ccf2f4002784cb3";
export const url=new URL("../icons/arrow_split-fill.svg?v=8d841e5d12b0020a394a8fcd48f348d2153d153dc0ba48c8f909cc861d468378",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
