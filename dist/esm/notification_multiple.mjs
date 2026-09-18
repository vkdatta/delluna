export const name="notification_multiple";
export const id="dl_1bace113825c4aff84c6";
export const url=new URL("../icons/N/notification_multiple.svg?v=06a7f2be0bb2cb7c3c6cdb59cc3129f9a761858e52a315f736e377bc2e040e74",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
