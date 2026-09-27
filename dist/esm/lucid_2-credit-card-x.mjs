export const name="lucid_2-credit-card-x";
export const id="dl_e406894cf4b248658313";
export const url=new URL("../icons/lucid_2-credit-card-x.svg?v=2532d5a322dfc910d89228d492d484f851a76a901bc02c9268db4f4557b9ae01",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
