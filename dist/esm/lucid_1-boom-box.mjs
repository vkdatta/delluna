export const name="lucid_1-boom-box";
export const id="dl_b76318ff36414d7a8d3b";
export const url=new URL("../icons/lucid_1-boom-box.svg?v=e7c132be97075e3011e77a3714d013abb6101d1ebdfcbbbf576e84415a9983dc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
