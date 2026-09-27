export const name="subset-proper-of-light";
export const id="dl_7f8323dcc0da80c9a116";
export const url=new URL("../icons/subset-proper-of-light.svg?v=1221a53c48f3bf69f4cfcec006f59c1f623cec104409f90cb640cb418765dc68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
