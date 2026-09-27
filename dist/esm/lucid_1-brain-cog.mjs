export const name="lucid_1-brain-cog";
export const id="dl_43f9fa71573e4461837a";
export const url=new URL("../icons/lucid_1-brain-cog.svg?v=a9ff2dd9f5e9542d09e6012a92ec51b6acffc0b3d3e481983ca5d62c74bc8c02",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
