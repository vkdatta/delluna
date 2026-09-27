export const name="sell_cloud";
export const id="dl_bbf9581e08de46371703";
export const url=new URL("../icons/sell_cloud.svg?v=81fbc681c28ceda0cca759ad10b3864e59c58a8b8f7eff4fb6f795c510a58bf1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
