export const name="15mp-fill";
export const id="dl_3c89ffb36ac7ae6f4aa4";
export const url=new URL("../icons/15mp-fill.svg?v=7880c6bb7096d91f2b60a8348087594aa79a55172d73d0d3e5af2f0163abd24b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
