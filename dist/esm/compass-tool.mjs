export const name="compass-tool";
export const id="dl_cb1218a44d3e46319dab";
export const url=new URL("../icons/compass-tool.svg?v=dd4f40073b7e605674d18559130b126c7cedd4dffff0683d3ae0402727b476d9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
