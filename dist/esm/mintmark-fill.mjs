export const name="mintmark-fill";
export const id="dl_fd4ab2d5f0a1852306ec";
export const url=new URL("../icons/mintmark-fill.svg?v=b76f78caf3046aabccc885155a97a38f743d3ba31bd454ee8d7f010682e8e8c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
