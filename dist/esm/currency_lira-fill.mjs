export const name="currency_lira-fill";
export const id="dl_3af5ba05f1727611e5c8";
export const url=new URL("../icons/currency_lira-fill.svg?v=e1d8a73af69bc450a0871c65dd2d564bac865527d10b1d16ab861ea95dc17b28",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
