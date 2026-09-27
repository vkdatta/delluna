export const name="replay-fill";
export const id="dl_d3db6be1ebe64a242301";
export const url=new URL("../icons/replay-fill.svg?v=4aa4df3d4e966bf4ea564fb51c1ed5d0785d4a80271f85129495a91bdeb881ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
