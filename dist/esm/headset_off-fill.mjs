export const name="headset_off-fill";
export const id="dl_472589b5e2dfa4d3a25f";
export const url=new URL("../icons/headset_off-fill.svg?v=207e1720c6da9757352535df3e9566661338534dd6a2b240757952d0eb9db2e5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
