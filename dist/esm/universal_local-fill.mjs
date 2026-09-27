export const name="universal_local-fill";
export const id="dl_274feeced3c104511bf5";
export const url=new URL("../icons/universal_local-fill.svg?v=232a55835e391cdecc37afc65239518fdd387069e78f2132a4dccb447c2377df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
