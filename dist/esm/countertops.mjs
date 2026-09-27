export const name="countertops";
export const id="dl_53f64dea4ab4eabf1b52";
export const url=new URL("../icons/countertops.svg?v=a4983d8033e6d61e6f750bb5e62bb0556d3dc90e08e718ced143cb0b4778d1fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
