export const name="number-square-one-light";
export const id="dl_4e34693b138a4615a748";
export const url=new URL("../icons/number-square-one-light.svg?v=87b51b8551c2c69255e8fceb29ded7573c75c82d66cf1033bb899d79834e7c3a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
