export const name="shopping-bag-bold";
export const id="dl_b4b938401a934c088bbe";
export const url=new URL("../icons/S/shopping-bag-bold.svg?v=3921f5d423653acfc9fe75a797560bbc2dd01439df8243445d3119a7d735a8e7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
