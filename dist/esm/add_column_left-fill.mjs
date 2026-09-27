export const name="add_column_left-fill";
export const id="dl_d8241377d147e8919919";
export const url=new URL("../icons/add_column_left-fill.svg?v=162054592d5923fe59b3b8e536219f24287651c61467a825931a35172b95a6f7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
