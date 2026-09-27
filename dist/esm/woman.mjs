export const name="woman";
export const id="dl_db2708b856e1f7dd319c";
export const url=new URL("../icons/woman.svg?v=c20bc53e835368cacb5be010944bc2288ee7b1004c5571a7c171b490c87656ac",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
