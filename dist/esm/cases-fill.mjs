export const name="cases-fill";
export const id="dl_651c61727add458e89a3";
export const url=new URL("../icons/C/cases-fill.svg?v=9a671dddfe02b615bb12ad5531c40db7472ef8d6c86a1038b9465b6b73135d49",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
