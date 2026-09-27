export const name="notification_important";
export const id="dl_0235da4c55f4292c879d";
export const url=new URL("../icons/notification_important.svg?v=c2d9868162e86bc7b250284e88f25739c3ccbd37d9b87a7d0e4a85a364821caa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
