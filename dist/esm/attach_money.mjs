export const name="attach_money";
export const id="dl_ad8c451e105767faaa61";
export const url=new URL("../icons/attach_money.svg?v=900b109f9857d1904bc4ef4b29deb08bd655b8eecc96869a0e6b01c521376a70",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
