export const name="hair-dryer-bold";
export const id="dl_5279904a13ca4034b508";
export const url=new URL("../icons/hair-dryer-bold.svg?v=f8a42d4495400895d5008f219b8af9877fbf8303f87d53bbcd30d9c50e09941d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
