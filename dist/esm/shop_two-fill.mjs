export const name="shop_two-fill";
export const id="dl_d781567097baa8fad303";
export const url=new URL("../icons/shop_two-fill.svg?v=9f8438dcfb53d945afe2c84068092125ddbb5bda93df67855b795cca394093df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
