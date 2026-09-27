export const name="local_post_office-fill";
export const id="dl_e16b8c82a4353ee54fad";
export const url=new URL("../icons/local_post_office-fill.svg?v=e3177f3064cfb7e50bbc6d0cd1bd817976e344dcd52d4a4a9ba66e6f38557f40",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
