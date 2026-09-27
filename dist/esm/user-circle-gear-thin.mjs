export const name="user-circle-gear-thin";
export const id="dl_fbf648b4a2f02d4ee199";
export const url=new URL("../icons/user-circle-gear-thin.svg?v=3efa9783f2eada5d616783c22ca53efbc78c43c9eaf1b1bc170de1ebfef06b11",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
