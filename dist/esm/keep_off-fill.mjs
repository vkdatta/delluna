export const name="keep_off-fill";
export const id="dl_7dd6b487bda5459e8963";
export const url=new URL("../icons/keep_off-fill.svg?v=4450fe38f8412df3da5bfbd7534c4e6be67a22b4fd8a114745f2e60204c1f768",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
