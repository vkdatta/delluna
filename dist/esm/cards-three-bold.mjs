export const name="cards-three-bold";
export const id="dl_26646616b8084b778102";
export const url=new URL("../icons/cards-three-bold.svg?v=d354860e1ff74e0d7cfbebbd31d96ef9d43d4deba099385d851fbe4e78302a22",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
