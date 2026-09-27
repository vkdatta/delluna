export const name="segment-fill";
export const id="dl_9c387012268d466325b8";
export const url=new URL("../icons/segment-fill.svg?v=406ec2b1e346dea88e1baf4e23cd8618fb6601c7c815b73114da64096b266a6e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
