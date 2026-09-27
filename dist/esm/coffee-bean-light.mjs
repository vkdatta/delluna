export const name="coffee-bean-light";
export const id="dl_43c776f958d64c6fb99e";
export const url=new URL("../icons/coffee-bean-light.svg?v=c4ed12c62dcf40b026f6a8290a920bae2c88eb582369f75f964e87a8f059fc0a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
