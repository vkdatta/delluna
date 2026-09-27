export const name="closed-captioning-fill";
export const id="dl_dbd22d3475e64a08bf4b";
export const url=new URL("../icons/closed-captioning-fill.svg?v=5050c843f969278294fcdee80e2a7d0f14a08e990f51ac559fcb2a343a40e2bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
