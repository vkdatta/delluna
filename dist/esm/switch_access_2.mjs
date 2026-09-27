export const name="switch_access_2";
export const id="dl_d1576970f9402a4a1e8c";
export const url=new URL("../icons/switch_access_2.svg?v=0d3c57d8e115ae2c719d8c1e92108c84a28ca517e08e945ec4160974f3a8aec5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
