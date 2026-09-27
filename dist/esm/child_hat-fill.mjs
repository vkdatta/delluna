export const name="child_hat-fill";
export const id="dl_cca1f8148a1b04da16d4";
export const url=new URL("../icons/child_hat-fill.svg?v=2392a22650cbf3a80d9f1eb87a7ef4bbfaa354fe6d0e8c2cffdca8762e7bd325",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
