export const name="stacked_inbox-fill";
export const id="dl_b798c94f8c5500c03646";
export const url=new URL("../icons/stacked_inbox-fill.svg?v=7d0c56a26fd6b8c522521c9a5fa584eba5799d6644217b201836b9c6f3f32040",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
