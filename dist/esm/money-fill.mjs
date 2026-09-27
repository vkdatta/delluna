export const name="money-fill";
export const id="dl_2ced6f0e293f462793a9";
export const url=new URL("../icons/money-fill.svg?v=075c181951e4423d67920811094911b4834d6ab45c073b314e9be58768feeeea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
