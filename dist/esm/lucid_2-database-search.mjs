export const name="lucid_2-database-search";
export const id="dl_a8aa72dd58f444949fe0";
export const url=new URL("../icons/lucid_2-database-search.svg?v=21a21ebe17bb99837e967207fb50a107a2523b3b770fa3341ae906b7beff33e6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
