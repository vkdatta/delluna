export const name="closed_caption_disabled-fill";
export const id="dl_ccac6d824c50b57c57e8";
export const url=new URL("../icons/closed_caption_disabled-fill.svg?v=4b9a5ad41451578097fd00e55cb5656cf81b91b87e801a174391bdfc6a0e3058",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
