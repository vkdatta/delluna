export const name="notification";
export const id="dl_9c259aa9f0534653a5ab";
export const url=new URL("../icons/notification.svg?v=2cdf7fad56efff3011f8c053d119792092dc16838df3450b68f59b69b77de3ea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
