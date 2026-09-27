export const name="arrows-out-line-vertical-light";
export const id="dl_cf75f7d6b66f4a249b3c";
export const url=new URL("../icons/arrows-out-line-vertical-light.svg?v=e9755d43a4db6f4c2c09587ce00d3f0c6bdb882ede34957640269b32437917b6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
