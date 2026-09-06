export const name="behance-logo";
export const id="dl_a426b97a79204064a23d";
export const url=new URL("../icons/behance-logo.svg?v=08fbec481e598add95a2e7b48df54498e0d4048e12b9a0cecc5a764a89847670",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
