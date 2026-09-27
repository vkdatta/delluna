export const name="okonomiyaki";
export const id="dl_4f3b84a6f968b3cc3070";
export const url=new URL("../icons/okonomiyaki.svg?v=b18a51134bfe1880021339e801a1fcdf9bf039f1d680753381a75d94dcd1e22d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
