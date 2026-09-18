export const name="padding";
export const id="dl_5023198753e244259b06";
export const url=new URL("../icons/P/padding.svg?v=eac2bd2ea876faf7a8b4568add86ce7f84b65f3bed66f71d9cce00a2dc448791",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
