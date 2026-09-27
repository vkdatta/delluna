export const name="lucid_1-circle-divide";
export const id="dl_fabce23b1b794e1d926f";
export const url=new URL("../icons/lucid_1-circle-divide.svg?v=9fcd24a3459b220077ff91668fb1c6288a5f6cf023cf17e8ebaa494ad2272087",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
