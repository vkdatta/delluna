export const name="lucid_2-database-search";
export const id="dl_a8aa72dd58f444949fe0";
export const url=new URL("../icons/lucid_2-database-search.svg?v=adcf53d2e548f2fb010e35f806b7ee22c3616cfe1566dd7308eb6ed03abe9b31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
