export const name="lucid_1-activity";
export const id="dl_48d533dc4f5e41528e99";
export const url=new URL("../icons/lucid_1-activity.svg?v=b1831d44fda9f75a10a45f10937cb7ea1c525157e9910c8a18a4b835022b8c87",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
