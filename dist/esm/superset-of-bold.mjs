export const name="superset-of-bold";
export const id="dl_473511f5e55452dfd405";
export const url=new URL("../icons/superset-of-bold.svg?v=6cd030cddb30cbf44379f5a34356735404aca0d5c9def364d4714b46bf849f46",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
