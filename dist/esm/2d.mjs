export const name="2d";
export const id="dl_ad1e0184ed356ea251ba";
export const url=new URL("../icons/2d.svg?v=b7c82c22d047ab6eff2edbbe2702d04c0dc449e88283ef57b52f8cac42539578",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
