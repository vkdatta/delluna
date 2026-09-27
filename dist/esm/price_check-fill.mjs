export const name="price_check-fill";
export const id="dl_87a6f4ec2bcb05093754";
export const url=new URL("../icons/price_check-fill.svg?v=deeb0d6281f5059c70a7447b4e8be105f6e0f976c54e223f5e54ce440bab25c8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
