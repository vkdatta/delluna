export const name="signal_cellular_off-fill";
export const id="dl_0cf2816e4ba64a6e1023";
export const url=new URL("../icons/signal_cellular_off-fill.svg?v=8674b04ae93a5f01989328397cf6b46a1036313fe613bbe9bc2cf3bf85662274",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
