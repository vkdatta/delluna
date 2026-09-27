export const name="laptop_windows-fill";
export const id="dl_577c97be7a6057a3af11";
export const url=new URL("../icons/laptop_windows-fill.svg?v=f9a53ca3355f826ead17200c515853bf4dae9c1578284c0141d005edb923fc44",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
