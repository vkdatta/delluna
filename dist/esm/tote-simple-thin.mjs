export const name="tote-simple-thin";
export const id="dl_dea4bf91fdb4c6708219";
export const url=new URL("../icons/tote-simple-thin.svg?v=3ad9699025a00d0d3b141866e33481a6d19b60e72177139cb62daf7fe675cbe6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
