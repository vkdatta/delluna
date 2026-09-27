export const name="notification_settings";
export const id="dl_cb7d8a5445ce6e5ebdf3";
export const url=new URL("../icons/notification_settings.svg?v=49258de57926de43ad9a2cc695a38053b6303dd289accc5a7057ebb147f8ce33",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
