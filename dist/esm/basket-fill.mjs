export const name="basket-fill";
export const id="dl_78db43ec672e44cc9d24";
export const url=new URL("../icons/basket-fill.svg?v=ed3f2d4fe9eec5163c2eb04697cc1933c28a1639578ab760ae4a9ecf5be846c1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
