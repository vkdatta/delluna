export const name="solar_power-fill";
export const id="dl_843727eccf994defb5c9";
export const url=new URL("../icons/solar_power-fill.svg?v=ebd1e04ecd42da161ccdf2d12c5c626cd0086d5b7dfe7692ef796ba4f0f7fd55",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
