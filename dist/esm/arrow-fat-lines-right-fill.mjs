export const name="arrow-fat-lines-right-fill";
export const id="dl_8214e328a8b24a6490b3";
export const url=new URL("../icons/arrow-fat-lines-right-fill.svg?v=b96eb33c421898c45d08801603ba918f04b217efd1872f2cd8d7dee1c8aee33b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
