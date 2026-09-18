export const name="media_link-fill";
export const id="dl_5226da368a6d49fd8265";
export const url=new URL("../icons/media_link-fill.svg?v=db0d239335893f85f65bc9edbdaf32ba2dbf7a584fbfa4ad30eec29d75550cf5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
