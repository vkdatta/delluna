export const name="lucid_1-cloud-moon-rain";
export const id="dl_5d08286f5428450186aa";
export const url=new URL("../icons/lucid_1-cloud-moon-rain.svg?v=1866d80c1dd96275c4e09a23c9c8c484a60cbb16535ad41232ebaa1d96c27a15",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
