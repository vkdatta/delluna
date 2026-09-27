export const name="lucid_1-cloud-moon-rain";
export const id="dl_5d08286f5428450186aa";
export const url=new URL("../icons/lucid_1-cloud-moon-rain.svg?v=24864dd1ec6b3d2c282e3966467350983037a072feced43a6a6cf72b50cda7ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
