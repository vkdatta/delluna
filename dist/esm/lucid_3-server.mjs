export const name="lucid_3-server";
export const id="dl_4bf1c2910add4c23a4b7";
export const url=new URL("../icons/lucid_3-server.svg?v=870d06da612929bebd574b978b8cdcc918842074a340e76aaebedd658f8c03d1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
