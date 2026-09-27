export const name="column";
export const id="dl_5fb04a9b931e4aa49680";
export const url=new URL("../icons/column.svg?v=0079ab51483f84748fb6b282409429da15e7af88aab5e5e1b2b3d754bfd80eca",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
