export const name="lucid_3-message-square-heart";
export const id="dl_c5ca3c6cd98544eaa054";
export const url=new URL("../icons/lucid_3-message-square-heart.svg?v=07e105876075410a1750b827808ec94efd4f5d7d84c63c495f0d3752afeb99b2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
