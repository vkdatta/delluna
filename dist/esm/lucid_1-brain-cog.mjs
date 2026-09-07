export const name="lucid_1-brain-cog";
export const id="dl_43f9fa71573e4461837a";
export const url=new URL("../icons/lucid_1-brain-cog.svg?v=c626a038a019ec09e70df185e6108d9626926bf4cdff50e1df05f37a86d1e64f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
