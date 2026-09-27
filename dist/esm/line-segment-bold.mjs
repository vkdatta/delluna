export const name="line-segment-bold";
export const id="dl_9aff12e9494c4c74b4c2";
export const url=new URL("../icons/line-segment-bold.svg?v=9fca75b1d9f861f8dc09011d18baac5ae3d7e329f392978e85bd7da56cd95084",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
