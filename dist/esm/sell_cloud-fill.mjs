export const name="sell_cloud-fill";
export const id="dl_c10b0c5da88830343299";
export const url=new URL("../icons/sell_cloud-fill.svg?v=972517a3915d3f91f65c9e6c2fa66d32c969576b13af0c386af61c4606f7a354",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
