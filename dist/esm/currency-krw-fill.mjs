export const name="currency-krw-fill";
export const id="dl_7d6bb392af784ab4ae7f";
export const url=new URL("../icons/currency-krw-fill.svg?v=05a9345f8923b10967a784fde6536751715ca648d15c1b9345582da0791c0a68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
