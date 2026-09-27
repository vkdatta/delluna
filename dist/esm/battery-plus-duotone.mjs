export const name="battery-plus-duotone";
export const id="dl_3b168784a47c4c368867";
export const url=new URL("../icons/battery-plus-duotone.svg?v=d8217a195c2ddecbe00a4ee9a9d5f131ba840f30dbad74dda3e46a07759348bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
