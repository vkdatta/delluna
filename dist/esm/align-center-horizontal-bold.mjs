export const name="align-center-horizontal-bold";
export const id="dl_e8abe797c4ba433cb943";
export const url=new URL("../icons/align-center-horizontal-bold.svg?v=8d0200c8d3d06ec2c22949561732bd260d3430053a24737c0b32f92dc1518da9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
