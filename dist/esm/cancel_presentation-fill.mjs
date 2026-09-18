export const name="cancel_presentation-fill";
export const id="dl_ba554e5142344346955f";
export const url=new URL("../icons/cancel_presentation-fill.svg?v=3c1220164c89756af8d8ad804f4faa3bf8516d98cf571662caafa58d94ba5760",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
