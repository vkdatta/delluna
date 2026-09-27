export const name="lucid_1-circle-parking-off";
export const id="dl_3b3d211ad8dd4b4dbb41";
export const url=new URL("../icons/lucid_1-circle-parking-off.svg?v=4a8b442d665dcfc3d2c01aaaee795a31fe16708aceaf13bdb4336646115b1f93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
