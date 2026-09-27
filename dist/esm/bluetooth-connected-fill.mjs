export const name="bluetooth-connected-fill";
export const id="dl_e43ba33fa64b48b181b0";
export const url=new URL("../icons/bluetooth-connected-fill.svg?v=70ece98239f43d45cf9eff7cc709b67ac2f5f93cf9712e977e097affc48b86ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
