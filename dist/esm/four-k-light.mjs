export const name="four-k-light";
export const id="dl_5f4d3ed6fe464fdb8e3f";
export const url=new URL("../icons/four-k-light.svg?v=87c708e8bac4af34e4f35baed5b7aca8d3ad26a7c52a38ba615581ee1792aff5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
