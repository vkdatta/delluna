export const name="radioactive-light";
export const id="dl_b874dbea56ad409e8afb";
export const url=new URL("../icons/radioactive-light.svg?v=167919726875be952508b67b21bad733cb9e05165f9b6bdfa27d6ca2bfa92f64",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
