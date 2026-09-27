export const name="plus-square-fill";
export const id="dl_0c59d28d5f6f463aa8c2";
export const url=new URL("../icons/plus-square-fill.svg?v=62f30d2ff05e0d9669e05427fbf1c088c664cc3e29d8a79ce9003ebdd19f80f3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
