export const name="wash-fill";
export const id="dl_5dc89b420677d4797cb5";
export const url=new URL("../icons/wash-fill.svg?v=491028e0671c20e200134c81eddbcaa8d6f379cd9029a48090f431b9a71d1124",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
