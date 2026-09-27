export const name="arrow-circle-down-left";
export const id="dl_3a0bc440acb64d848aec";
export const url=new URL("../icons/arrow-circle-down-left.svg?v=be5a8be09a99927c5f093618a8adda3777f20b0259536b4a0c0f576a25d3c0ee",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
