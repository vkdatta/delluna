export const name="notification_important";
export const id="dl_f69bbd17ca924579a656";
export const url=new URL("../icons/notification_important.svg?v=be1a65bf1865d63f59058d5d9d8811864f3c47b03925fb491b297e7fcbc91b6b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
