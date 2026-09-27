export const name="compass-rose-fill";
export const id="dl_750a1e88a3384851864c";
export const url=new URL("../icons/compass-rose-fill.svg?v=2379c12de6974e7d37e7bf94fc22effebf185248b23ea03b062972ea4e914e5c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
