export const name="linktree-logo-thin";
export const id="dl_9744cd4f863243a29841";
export const url=new URL("../icons/linktree-logo-thin.svg?v=5f8cfbc699434eff050c8d8be5b066a85c38b9037241e45561e18062b2b2279b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
