export const name="cowboy-hat";
export const id="dl_13daa67d938146dca83e";
export const url=new URL("../icons/cowboy-hat.svg?v=789c9f7736ecb032dbea953fe533a82af0caa9c385faf29f15ef02af1c383cd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
