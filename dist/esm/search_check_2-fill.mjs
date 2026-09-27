export const name="search_check_2-fill";
export const id="dl_91ecd1093b009ac9ab8a";
export const url=new URL("../icons/search_check_2-fill.svg?v=9b712cd8bc984c4217cee43555feee58441914ab0be2ecf599258fb276ef91ad",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
