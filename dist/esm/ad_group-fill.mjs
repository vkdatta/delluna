export const name="ad_group-fill";
export const id="dl_093685c5784d885069f2";
export const url=new URL("../icons/ad_group-fill.svg?v=d3e0898c00870be8080b12a2c8d9e01d4962866b81a1971ec286c16518cdb58c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
