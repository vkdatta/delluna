export const name="lucid_3-rectangle-circle";
export const id="dl_738e6ce223804ca18267";
export const url=new URL("../icons/lucid_3-rectangle-circle.svg?v=a003a75a9102ad5a2b254c3bdceea1980fb3b1567439a248eb19fd214be7b2f8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
