export const name="flag-banner-fold";
export const id="dl_47e4264ca9cc4d46a9fb";
export const url=new URL("../icons/flag-banner-fold.svg?v=6b193b181c63018f93eef70bd2353b3b2de271245e2be75b96208e1e606dbb89",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
