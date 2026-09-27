export const name="lucid_1-activity";
export const id="dl_48d533dc4f5e41528e99";
export const url=new URL("../icons/lucid_1-activity.svg?v=60934d5602fb4b59da6a591e548c34eee57354c57d5fb80929c66108eac81b78",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
