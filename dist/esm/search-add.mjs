export const name="search-add";
export const id="dl_a736db7ee1d817a1cd97";
export const url=new URL("../icons/search-add.svg?v=46c2dbcfa06f8bcb8a7c495d453992f057b7128933d4be47b5ffefa165541b2e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
