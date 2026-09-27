export const name="lucid_3-printer";
export const id="dl_28997569ec174f92be79";
export const url=new URL("../icons/lucid_3-printer.svg?v=af031322decf2160c22374354d9fab510c1835321e0c33ad676b8037c207bae3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
