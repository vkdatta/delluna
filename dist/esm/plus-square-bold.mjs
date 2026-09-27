export const name="plus-square-bold";
export const id="dl_c0ef2cd6834c4ae1a2c4";
export const url=new URL("../icons/plus-square-bold.svg?v=b7d294895bd8cbff62967df682d301b23213d5e3a79586e9c01cc8300da13aec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
