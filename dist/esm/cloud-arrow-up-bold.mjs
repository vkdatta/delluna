export const name="cloud-arrow-up-bold";
export const id="dl_14338833387e4d7aa0a6";
export const url=new URL("../icons/cloud-arrow-up-bold.svg?v=541af8bbaed1356cf4aa020617d9979a0161f55b39d3db9b99ed954070f0b3e0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
