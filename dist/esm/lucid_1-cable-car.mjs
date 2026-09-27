export const name="lucid_1-cable-car";
export const id="dl_92b37ed0c2f34bc4acd9";
export const url=new URL("../icons/lucid_1-cable-car.svg?v=05538d73fba09bf4a4c40bbaf5b76a91f44dfd747cfb4fb3919c1a7cc74aa066",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
