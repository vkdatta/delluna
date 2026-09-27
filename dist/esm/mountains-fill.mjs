export const name="mountains-fill";
export const id="dl_31b1222bc78f4452befc";
export const url=new URL("../icons/mountains-fill.svg?v=ab2414980798d700bb7b441f7517def5f3e6aee96dad042dfb896aa1bd141597",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
