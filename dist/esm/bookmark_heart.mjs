export const name="bookmark_heart";
export const id="dl_26d9ec376ef66a0868bc";
export const url=new URL("../icons/bookmark_heart.svg?v=835a3208697ee5eaffecd648d9b43017a30764446294f70bf1afde2ac64a2134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
