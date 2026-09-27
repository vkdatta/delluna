export const name="navigation-arrow-fill";
export const id="dl_ca4d441d513c47e9b4a2";
export const url=new URL("../icons/navigation-arrow-fill.svg?v=3ab2b62be7733abe0e5a17a479c82cc3af26eb22d0b9615d7af8a67d78857169",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
