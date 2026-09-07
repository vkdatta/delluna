export const name="vignette";
export const id="dl_e9f5b402d0ab4e098af5";
export const url=new URL("../icons/V/vignette.svg?v=85ae9d6f8702a6c9071cd9719ec3a9a7e86a70dbf2e0e92d3a51e3ad2246e970",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
