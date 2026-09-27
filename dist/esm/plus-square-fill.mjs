export const name="plus-square-fill";
export const id="dl_0c59d28d5f6f463aa8c2";
export const url=new URL("../icons/plus-square-fill.svg?v=29f032e5b8d9d83a809dfd3ff09914bbfd7c90d670df0f1a2e69cfe97b0d2e17",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
