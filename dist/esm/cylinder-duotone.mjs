export const name="cylinder-duotone";
export const id="dl_81aa91dbe0fd45bebf2b";
export const url=new URL("../icons/cylinder-duotone.svg?v=3ddcc779f83c4773dccad39f592bcb42b63c668a26ff13d199389f06bc382200",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
