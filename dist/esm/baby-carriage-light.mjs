export const name="baby-carriage-light";
export const id="dl_28790674bfd54b59b499";
export const url=new URL("../icons/baby-carriage-light.svg?v=ea7b4a4f7ad5882d559e3e4ddbe836fbaefd5fb3ffec42acf36da2f100fcd0e8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
