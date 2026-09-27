export const name="stop-circle-fill";
export const id="dl_47056fd9ae3ca63fc9cf";
export const url=new URL("../icons/stop-circle-fill.svg?v=078da8245560d6a40b604acbe1049d45ed9ea2508b86ea22f4293512bb4ce838",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
