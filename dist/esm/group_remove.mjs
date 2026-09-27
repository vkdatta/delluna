export const name="group_remove";
export const id="dl_0c2c1190b8b2ccd25ec3";
export const url=new URL("../icons/group_remove.svg?v=7aa497224e3827c97b3534776ad840c7a73fd05b1cf652c84f93f1bf0bdaa7a3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
