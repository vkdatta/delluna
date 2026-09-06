export const name="caret-circle-double-up-light";
export const id="dl_85ff42e367614a658377";
export const url=new URL("../icons/caret-circle-double-up-light.svg?v=063e54e480ee8f3f2924fe1fe5f9b60139c0370c3b66e73b66c03d676f7cb50e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
