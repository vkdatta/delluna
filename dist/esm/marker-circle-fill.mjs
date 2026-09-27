export const name="marker-circle-fill";
export const id="dl_2585452e5f3f4532bb38";
export const url=new URL("../icons/marker-circle-fill.svg?v=c0efbe564894397ed2219b29f10b0fae1c54821c073f5ac1e46056b5eb0dd87e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
