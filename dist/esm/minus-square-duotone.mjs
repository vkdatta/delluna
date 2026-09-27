export const name="minus-square-duotone";
export const id="dl_3640b9c485dc4188a00f";
export const url=new URL("../icons/minus-square-duotone.svg?v=0969d1d0244c6faeb56e9c0a5d7a8bc0593ced8202d09572636ddb8d106af71d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
