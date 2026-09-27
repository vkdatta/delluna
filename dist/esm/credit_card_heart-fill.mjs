export const name="credit_card_heart-fill";
export const id="dl_1fa015b49d517e9dd411";
export const url=new URL("../icons/credit_card_heart-fill.svg?v=c047db77c23eefab34b4b1afba824acb51c142d6a59fb57aa78ccdc957e10d34",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
