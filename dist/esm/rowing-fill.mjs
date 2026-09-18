export const name="rowing-fill";
export const id="dl_c9e984d666f048dc979b";
export const url=new URL("../icons/R/rowing-fill.svg?v=cea17987b53bcaf3375d054a5c09f043ad15f05b3aacf35088ff29047f5c80be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
