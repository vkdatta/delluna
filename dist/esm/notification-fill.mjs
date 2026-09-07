export const name="notification-fill";
export const id="dl_4a0b7cc523c24e529a85";
export const url=new URL("../icons/notification-fill.svg?v=5de760e2215091507bf1b2fe2297ff95c751dd1304176adebe0c5cc85ad8b6fb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
