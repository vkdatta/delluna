export const name="selection-plus-duotone";
export const id="dl_002c1635ed324f0584d8";
export const url=new URL("../icons/S/selection-plus-duotone.svg?v=95924698fbf8e3e7ea72ac6da796e5a7c23608f6d37c7720bb04a4beecde7aca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
