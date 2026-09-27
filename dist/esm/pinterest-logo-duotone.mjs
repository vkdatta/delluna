export const name="pinterest-logo-duotone";
export const id="dl_77bb3b5b18534038a494";
export const url=new URL("../icons/pinterest-logo-duotone.svg?v=aafec167b5b32aa98d0df0712a3b5887edeef8e29d1d526150776020bfe2d8bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
