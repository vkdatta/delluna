export const name="lucid_3-smartphone-charging";
export const id="dl_10642f8432e64ca6b773";
export const url=new URL("../icons/lucid_3-smartphone-charging.svg?v=3e8fd5f6f2751383b27a1c342d12e49f5e6af13b2b338275900a8fe8a7df47ab",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
