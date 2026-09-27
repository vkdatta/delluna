export const name="lucid_3-scissors";
export const id="dl_298000f037314a6da436";
export const url=new URL("../icons/lucid_3-scissors.svg?v=9338d89f538a21a4dce0efa555594ec7e38c3b96ef4a723956162dc78189d8e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
