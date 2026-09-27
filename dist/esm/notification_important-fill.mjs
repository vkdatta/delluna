export const name="notification_important-fill";
export const id="dl_aad08658adac559538f1";
export const url=new URL("../icons/notification_important-fill.svg?v=0ab67ce011540914d9239e61a199406256af9f7cc3bf2c3128ae74dc322082f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
