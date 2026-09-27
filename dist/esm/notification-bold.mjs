export const name="notification-bold";
export const id="dl_bbcbc790b7c44c7ba15f";
export const url=new URL("../icons/notification-bold.svg?v=c0445d695fb1c0adfe06f689d761b644845f8abef9f92f5563d523468a1c1c0b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
