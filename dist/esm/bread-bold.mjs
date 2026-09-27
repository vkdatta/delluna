export const name="bread-bold";
export const id="dl_f498f39ccf9044908875";
export const url=new URL("../icons/bread-bold.svg?v=875b3702d81b7cdc2191311812eef1165ff44d28f2e78020f630525fcdb89c51",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
