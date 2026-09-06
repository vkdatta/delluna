export const name="lucid_3-scan-heart";
export const id="dl_6b5e635b6b1740ad9973";
export const url=new URL("../icons/lucid_3-scan-heart.svg?v=661c599a332d0226b9487978007917d7a98602971ea0a559e48ee826a60309ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
