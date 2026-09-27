export const name="number-square-six-duotone";
export const id="dl_c6f3119cb1984b03828d";
export const url=new URL("../icons/number-square-six-duotone.svg?v=f8e2711d20585d187d24cb62604c7dbb85d533496a53f0ad02eae57a4c5cb1d4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
