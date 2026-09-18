export const name="landslide-fill";
export const id="dl_e09e10df8d9c40d4b608";
export const url=new URL("../icons/landslide-fill.svg?v=e1a0dfa9d329e95ecc578c81146e8951ba6d41eff65012384f767cd9e48fe5b9",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
