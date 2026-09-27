export const name="orange-fill";
export const id="dl_505d2ad458ac4c8bb5a8";
export const url=new URL("../icons/orange-fill.svg?v=21d3de423a3689c9bb89313c6d43bc6617f49bd40a0516cd551fb9958438bfb8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
