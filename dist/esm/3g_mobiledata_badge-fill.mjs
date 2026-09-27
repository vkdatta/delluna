export const name="3g_mobiledata_badge-fill";
export const id="dl_f23188be2e6a3da43c5b";
export const url=new URL("../icons/3g_mobiledata_badge-fill.svg?v=967cd1f5f7183408b50400ff4da2b16165fe9e4883c7eb534b36afccb6a0cc75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
