export const name="file-image";
export const id="dl_5534752387284867ad19";
export const url=new URL("../icons/file-image.svg?v=e95509437e4f888a94255f6e5379c9f6649af23df644258c038bf005ccc2e29c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
