export const name="subtract-thin";
export const id="dl_8accde9399b010742cf2";
export const url=new URL("../icons/subtract-thin.svg?v=14cf7d333d9f913254fa7f5f19234567cbeeb36b9815c19a37cf1b3c9ed5021b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
