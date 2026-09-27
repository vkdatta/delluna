export const name="share_off-fill";
export const id="dl_7d2291dc5afdef990800";
export const url=new URL("../icons/share_off-fill.svg?v=865a3c79da915aaf7224eb0966cb3bcc3308c91713eb88eae7807be687ade9ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
