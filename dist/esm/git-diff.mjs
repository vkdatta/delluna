export const name="git-diff";
export const id="dl_a1588c6899e74fbc8f4d";
export const url=new URL("../icons/git-diff.svg?v=13d5a29175f0a07b7172a344b29a0c5596888af122238779eef283a7b1a6035d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
