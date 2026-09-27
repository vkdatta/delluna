export const name="lucid_3-piano";
export const id="dl_fee7b600f8f346abaafa";
export const url=new URL("../icons/lucid_3-piano.svg?v=c84efafc90fa09531324b50a96a31f95d3baf524e2437a8329c424318c7919df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
