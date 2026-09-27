export const name="id_card-fill";
export const id="dl_73a058846a4847f63b55";
export const url=new URL("../icons/id_card-fill.svg?v=9c0d175da00f6c1cf03c3411b865a6ea36b53ef307ea56a9a4ea50c888977a3b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
