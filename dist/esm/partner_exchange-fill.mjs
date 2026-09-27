export const name="partner_exchange-fill";
export const id="dl_09309e1ace6df1950362";
export const url=new URL("../icons/partner_exchange-fill.svg?v=ec2d646c8e8b7f24b9724bed0dfb8646712d05013628fbcf2a6aa03af7298053",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
