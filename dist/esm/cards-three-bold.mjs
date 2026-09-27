export const name="cards-three-bold";
export const id="dl_26646616b8084b778102";
export const url=new URL("../icons/cards-three-bold.svg?v=b73b9240730ec8ead3eca229f2a93bb3e91b8b170fe2baa31ed27896a2c212fa",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
