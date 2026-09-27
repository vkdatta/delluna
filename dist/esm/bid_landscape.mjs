export const name="bid_landscape";
export const id="dl_4ab77db711128df5ccc7";
export const url=new URL("../icons/bid_landscape.svg?v=20aea130963a225eb9906ee86c993c78c4a14e808888383ef4ae00c3755fb3c5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
