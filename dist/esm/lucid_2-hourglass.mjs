export const name="lucid_2-hourglass";
export const id="dl_52621c8e50184cb4bdcf";
export const url=new URL("../icons/lucid_2-hourglass.svg?v=880f30e8b1e07a28a0e011210c6d9859d585fcd90ba309affc593af11dfe1b90",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
