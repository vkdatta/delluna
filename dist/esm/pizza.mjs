export const name="pizza";
export const id="dl_280225cba48b4847b32b";
export const url=new URL("../icons/pizza.svg?v=165d8dd415a18fad9ad2587b45160878ba682686dee075b1042cd964419c9bbd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
