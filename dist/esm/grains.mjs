export const name="grains";
export const id="dl_0d318c9d9647434aba5d";
export const url=new URL("../icons/grains.svg?v=7dc09f7c21a52a09b6b004677de334c2e7b4b21261186d3e34b7118a91fab432",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
