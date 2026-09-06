export const name="list-dashes-duotone";
export const id="dl_347d552a2f50413d8b6c";
export const url=new URL("../icons/list-dashes-duotone.svg?v=1789c74f743016905b5f12b27a8a06d86698bb7de2d54d604e7d30292b50d306",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
