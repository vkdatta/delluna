export const name="rotate_left-fill";
export const id="dl_b0845b5c69d1be105a4a";
export const url=new URL("../icons/rotate_left-fill.svg?v=1f15e291234a13f173ee8cfed8e8e7b8469f115e6971e8a195b4955d44e7fe69",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
