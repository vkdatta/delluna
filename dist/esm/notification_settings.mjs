export const name="notification_settings";
export const id="dl_4ca5ee7a7b23a2e56d30";
export const url=new URL("../icons/notification_settings.svg?v=c22fcc415cd3c37100fa17349835d9d5f30d93b9d0a2d3f35655e819a6e064e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
