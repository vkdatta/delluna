export const name="lucid_3-shield-lock";
export const id="dl_8e5b2c1c96de4dc5b0ff";
export const url=new URL("../icons/lucid_3-shield-lock.svg?v=dd71dd98c977d2fca17ad051e5ac7e0971557b8907d96035534561c953c5702b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
