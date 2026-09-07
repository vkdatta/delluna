export const name="eyeglasses";
export const id="dl_96f572cdd4e14202a95a";
export const url=new URL("../icons/eyeglasses.svg?v=c9239db69e71d7f196de0df1c48dc24dc2f8b73b83474d644c562657c116297c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
