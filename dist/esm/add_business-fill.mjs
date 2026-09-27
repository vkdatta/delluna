export const name="add_business-fill";
export const id="dl_041e29030ba3a70929ff";
export const url=new URL("../icons/add_business-fill.svg?v=a587229322ce5d8c69e9a9eac64dc87b9ddf32f59c00ceb783e590e00856a745",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
