export const name="cards_star";
export const id="dl_f7e5c06ddbea9874396f";
export const url=new URL("../icons/cards_star.svg?v=a7f98f8294bcee15498e5cbf8f313b274539127a9fa25dccf9fcead586680337",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
