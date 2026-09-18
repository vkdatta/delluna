export const name="notifications_active-fill";
export const id="dl_b904e08368f04c19b92a";
export const url=new URL("../icons/notifications_active-fill.svg?v=28b75ca1d1b0fa433314af65cb5cbfe8e1e0d458f5ee3d6ba632ff0b910c0333",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
