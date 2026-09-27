export const name="faders-horizontal";
export const id="dl_e2ae4edb65e54c07baa0";
export const url=new URL("../icons/faders-horizontal.svg?v=bececf1705c5518167291856a621926b6cbff906c8082316490112183b65a34d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
