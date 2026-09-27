export const name="parent_child_dining-fill";
export const id="dl_eaa5d82f86261edafc7c";
export const url=new URL("../icons/parent_child_dining-fill.svg?v=3a6cff818fb0663242de273f92496a796e05548b7360f2ced57efc64dfeed84d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
