export const name="pen-nib-straight-duotone";
export const id="dl_4f0d3d3aa19545e2a71b";
export const url=new URL("../icons/pen-nib-straight-duotone.svg?v=2c2a7cc461e2d3bed867fc482923f29e883fcff3651c07d6db2606d2532c36d8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
