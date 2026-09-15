export const name="brightness_1";
export const id="dl_e3557d5baa1b44b6b619";
export const url=new URL("../icons/B/brightness_1.svg?v=7cf2e8bdb09decc70d39516dc48e745dec1bb583751299b023d59696df7e25ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
