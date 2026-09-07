export const name="lucid_1-bitcoin";
export const id="dl_725fec57d0ed44d2a027";
export const url=new URL("../icons/lucid_1-bitcoin.svg?v=17be81b873c4c82a3aa8f71c44dda90b07dedc497b52cc671d5d4116b3a41cea",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
