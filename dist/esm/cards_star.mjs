export const name="cards_star";
export const id="dl_116af42ab6ef024f0b99";
export const url=new URL("../icons/cards_star.svg?v=2b71d95b6e6ecfd8581f08ab6749f284e2265167a55b886ec51e1b4b4b6352d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
