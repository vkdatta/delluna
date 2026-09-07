export const name="flower-tulip-duotone";
export const id="dl_aaa66fc90e8645a09625";
export const url=new URL("../icons/flower-tulip-duotone.svg?v=86418689b43fe0823499a24ef787e5ab154819686a1e918afd275955c613a033",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
