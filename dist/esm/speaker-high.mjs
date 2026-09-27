export const name="speaker-high";
export const id="dl_70f8eb8f1a67cd2918e8";
export const url=new URL("../icons/speaker-high.svg?v=98c25bf19a3cf87fd2f4e0a7613dcaf78754d5aefd19af73c61530715f1d79de",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
