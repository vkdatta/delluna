export const name="helicopter-fill";
export const id="dl_2321bd1e7464459a90b0";
export const url=new URL("../icons/H/helicopter-fill.svg?v=c6bca5b846b11e8105a55ad4d38f10ef6e5c007cd1575b57b27f800d03a9428d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
