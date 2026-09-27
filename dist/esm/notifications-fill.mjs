export const name="notifications-fill";
export const id="dl_9c4f905e3242e59f7018";
export const url=new URL("../icons/notifications-fill.svg?v=460b08f38a9eac45e2bdcc48bb7231692dc7922a8826ca1d791f9b8ace15943c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
