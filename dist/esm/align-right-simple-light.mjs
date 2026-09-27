export const name="align-right-simple-light";
export const id="dl_36bb66b9d6454aa08c50";
export const url=new URL("../icons/align-right-simple-light.svg?v=10cc72bdb1878f57cdd0abaf7d912b8f3cd673280199e38c1362b6feb749f0f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
