export const name="funnel-duotone";
export const id="dl_914ae9aaf60a4418922a";
export const url=new URL("../icons/funnel-duotone.svg?v=3044725524828bde6bea1987a0a2a91c56a3b09f5526f9851d3aa0af5428f6fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
