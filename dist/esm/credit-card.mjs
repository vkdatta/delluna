export const name="credit-card";
export const id="dl_30fe094e0a0f43d6b8ce";
export const url=new URL("../icons/credit-card.svg?v=14efb72a1515328d3340f4061ce30fca9708700fd0466852d0294644a5f17c45",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
