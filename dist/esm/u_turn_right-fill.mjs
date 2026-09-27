export const name="u_turn_right-fill";
export const id="dl_45b3869da98b22196a71";
export const url=new URL("../icons/u_turn_right-fill.svg?v=febfff35c8842f0fc9098865a5bc30c2075b98708413dee104b69b0d31124a99",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
