export const name="notification_important";
export const id="dl_bd975fd30093e5a1fc62";
export const url=new URL("../icons/notification_important.svg?v=f421e17ba9cf477868375316daf51ffd98f6f91a25dd9f136bfde325e6bd91fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
