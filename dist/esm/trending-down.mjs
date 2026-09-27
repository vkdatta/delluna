export const name="trending-down";
export const id="dl_05a3fe073cd847e19cf9";
export const url=new URL("../icons/trending-down.svg?v=e28633d3542897bd354210d651eb58f0b78cce4adf67a650968c7eda82d1e1ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
