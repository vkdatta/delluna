export const name="notification_settings";
export const id="dl_30e3df3e7d9c8d446db5";
export const url=new URL("../icons/notification_settings.svg?v=6b46cb9a320e8206deb02fcca95c6f631a5ecaac7a301ce981d56c382ba8258d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
