export const name="grid_on-fill";
export const id="dl_fa11c9d5587002379d31";
export const url=new URL("../icons/grid_on-fill.svg?v=12023b7614e619ea51d17ff7b3308084648cff79fbf8d3840fb28fbab886719d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
