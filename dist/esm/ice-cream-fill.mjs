export const name="ice-cream-fill";
export const id="dl_6cc97e09cf5a4602b571";
export const url=new URL("../icons/ice-cream-fill.svg?v=dce50c7e3c8aa5ed79320a0a9b1f764894f2088333ef9e82bfeff8e82348e1fd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
