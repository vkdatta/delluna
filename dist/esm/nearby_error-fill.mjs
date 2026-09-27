export const name="nearby_error-fill";
export const id="dl_c3698b3b59429d97f79f";
export const url=new URL("../icons/nearby_error-fill.svg?v=8f43607395e3fcf72a07c305f00fb7ca97e13dce7670bb3b1a3edf1b436cfecd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
