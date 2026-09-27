export const name="nest_wifi_pro_2";
export const id="dl_5af83a71da63ba981bc7";
export const url=new URL("../icons/nest_wifi_pro_2.svg?v=ed6a486691b2a0d03281e32519c2d8e6bfa98784eb76c94a8005a068c93483f9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
