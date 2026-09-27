export const name="git-fork-bold";
export const id="dl_ab2c2633a02a43fbb002";
export const url=new URL("../icons/git-fork-bold.svg?v=cb276064223f9d77a1ea3ca50cfe8797996081574016cefc09b826509b151967",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
