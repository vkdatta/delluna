export const name="credit_card_gear";
export const id="dl_4daafe67ecfe4b9e83a0";
export const url=new URL("../icons/C/credit_card_gear.svg?v=a4402c8e589d6ea0a229290a7976ca53781c73eef779da2d48e5d1f1cc86213b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
