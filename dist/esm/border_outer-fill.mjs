export const name="border_outer-fill";
export const id="dl_a83781ffda8fb25e7c23";
export const url=new URL("../icons/border_outer-fill.svg?v=9752386db9fc22692f871f7be61c56201e729bfc61cff00e0ba5f8a860ef535c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
