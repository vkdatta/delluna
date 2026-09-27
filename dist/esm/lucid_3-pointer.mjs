export const name="lucid_3-pointer";
export const id="dl_c132183939674944a435";
export const url=new URL("../icons/lucid_3-pointer.svg?v=aa1aaa0b7e4fd4094c17a44a4e676e6654b5edbe96536402401392ca3eb0fed6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
