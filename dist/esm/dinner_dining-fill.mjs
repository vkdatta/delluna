export const name="dinner_dining-fill";
export const id="dl_a82586c5657cf741ee2b";
export const url=new URL("../icons/dinner_dining-fill.svg?v=244f9430fa39978399bdb83cae2e5fbca68c339ffa616b2861826974b48aa859",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
