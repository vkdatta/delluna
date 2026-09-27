export const name="nightlight-fill";
export const id="dl_0cfac9c2ca26a5763ed3";
export const url=new URL("../icons/nightlight-fill.svg?v=8bf7af103310c2b5d38516a8b9739411446ddf0d0135674298dc76b02034f31f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
