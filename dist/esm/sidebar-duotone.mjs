export const name="sidebar-duotone";
export const id="dl_0f4e4719f4f1e77701b8";
export const url=new URL("../icons/sidebar-duotone.svg?v=2df126c76ad33e5938fa7ddc42c22dbd538886e6e670d3526d0e0a370e6ac9aa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
