export const name="git-fork-fill";
export const id="dl_5e3bd7126c6449c49ebe";
export const url=new URL("../icons/git-fork-fill.svg?v=ce3c79f76f8e9af51bcac0a0624c6e8fa95b2778715ae9c784ce308e0be1a79f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
