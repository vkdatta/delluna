export const name="stack-plus-thin";
export const id="dl_2df43866b54d4a58bb16";
export const url=new URL("../icons/S/stack-plus-thin.svg?v=be4deee4280e2c723ba2bef2fe2a8ca128a6f6db0a71e4ffb6db160c8417a805",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
