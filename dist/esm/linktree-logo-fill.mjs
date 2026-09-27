export const name="linktree-logo-fill";
export const id="dl_c78aa162107148c38aa4";
export const url=new URL("../icons/linktree-logo-fill.svg?v=dbb3e8f5f4c5bfb62875d51b96f94098d891c3ac108ec51a9da9090141830ba7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
