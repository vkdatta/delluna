export const name="number-square-two-light";
export const id="dl_42ddc757689d478ba190";
export const url=new URL("../icons/number-square-two-light.svg?v=33799f7866103a5d5542bad7425459747415479a23869b7ac44a89ca1f709bd9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
