export const name="tools_level";
export const id="dl_2b2232f0db4ff4d4e4ef";
export const url=new URL("../icons/tools_level.svg?v=513d8ec7a24f7280d67a0ec51c47d3113e3971a9d3571786ae681f484b518353",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
