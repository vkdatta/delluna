export const name="user-circle-gear-light";
export const id="dl_14982d612b487a756cd2";
export const url=new URL("../icons/user-circle-gear-light.svg?v=0c4a942e1a9f03463e26d74ed837b21e11c1235ea40d8777a2adbafe25b34d3d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
