export const name="bid_landscape";
export const id="dl_5283a5fae03c40b49b66";
export const url=new URL("../icons/bid_landscape.svg?v=d38ce879dc6efb4530345e588ce57aa2702a9f1c17b12c71f40abf01c78fa5b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
