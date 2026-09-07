export const name="camera-fill";
export const id="dl_797324c779da47ba998b";
export const url=new URL("../icons/camera-fill.svg?v=c7528f079621e9b93eded98c1579463ec3b888dc821d5c238fc50287431d46c6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
