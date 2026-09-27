export const name="hourglass-high-thin";
export const id="dl_21b0fde5d3064d06b4d8";
export const url=new URL("../icons/hourglass-high-thin.svg?v=dd1e9796a74f43ef6e10c39e67aaebf4ac2fd64f6db770c20ed2fbe20bec222b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
