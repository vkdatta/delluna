export const name="desktop_cloud_stack";
export const id="dl_5acc4d5f8bb64bdc8182";
export const url=new URL("../icons/desktop_cloud_stack.svg?v=5578c3b79bf323007c8cfb705292e4b1d1446068a4134b48b60e5ce2ea147eb0",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
