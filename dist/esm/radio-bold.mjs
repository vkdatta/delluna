export const name="radio-bold";
export const id="dl_891b34656499458ab628";
export const url=new URL("../icons/radio-bold.svg?v=2feda6d6b3148d2f68b535ad2fa464e2b786130b1d0c9f547e5b49578f5388ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
