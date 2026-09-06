export const name="phone-list-light";
export const id="dl_f635ec0c86324cdba15f";
export const url=new URL("../icons/phone-list-light.svg?v=ff73475282fa594527ae426758c07660e4e611bcf5c95424eac7577072828942",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
