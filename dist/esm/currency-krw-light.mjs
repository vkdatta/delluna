export const name="currency-krw-light";
export const id="dl_72d415b8bfc847b595ed";
export const url=new URL("../icons/currency-krw-light.svg?v=f9212d650e9212ba5e96dfa3a53c79c0e5dd5be77c2ecf06955584a5ebed3dbf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
