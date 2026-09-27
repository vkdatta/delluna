export const name="leak_remove-fill";
export const id="dl_98d4691fc2a18d692efa";
export const url=new URL("../icons/leak_remove-fill.svg?v=e082c08f23ea2ea90b9c693f90be0c01abbf46ceba71134499183fda7f4208c4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
