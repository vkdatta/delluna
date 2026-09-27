export const name="list_alt_add";
export const id="dl_eec881375ad0f1fc68c2";
export const url=new URL("../icons/list_alt_add.svg?v=2126bffa29d647b9d6b915a700654506b41911f9d922446f7c5291ca7133be67",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
