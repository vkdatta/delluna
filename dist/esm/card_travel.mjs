export const name="card_travel";
export const id="dl_c99be14f134a9650cbaf";
export const url=new URL("../icons/card_travel.svg?v=d20859ffab7214cffc99a68ff607c31f947c2635907da3d4f3ff8d271d28b05e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
