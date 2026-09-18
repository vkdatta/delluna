export const name="bucket_check-fill";
export const id="dl_36d3c7b50f7945ccad12";
export const url=new URL("../icons/bucket_check-fill.svg?v=59dca6ecb0959c673387c0c12da21e71e080fb42c6c0bc253c15cc102571c9e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
