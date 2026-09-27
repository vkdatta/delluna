export const name="near_me-fill";
export const id="dl_62b77e98e8df5944bd84";
export const url=new URL("../icons/near_me-fill.svg?v=1f0ff18edd9ade45bbdebcdc934858bd2e39265c9c5e3dc51679978dc8983533",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
