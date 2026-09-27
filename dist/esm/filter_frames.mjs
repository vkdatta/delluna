export const name="filter_frames";
export const id="dl_5fb57d4f59c2e4b52ab7";
export const url=new URL("../icons/filter_frames.svg?v=3fa8a53d8de82213184d7a6525edf19b1fd81fbe8782ac7a8582a87e1692cc23",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
