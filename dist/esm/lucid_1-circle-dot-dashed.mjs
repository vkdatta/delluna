export const name="lucid_1-circle-dot-dashed";
export const id="dl_5e4c5c6df8b148528bc3";
export const url=new URL("../icons/lucid_1-circle-dot-dashed.svg?v=a0027fb777794d41f2a75696a61861f8b3dfc4cccfc4bae9ead4f7ed6c195713",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
