export const name="trophy-light";
export const id="dl_f42828fcb47c421d8dab";
export const url=new URL("../icons/T/trophy-light.svg?v=ef1ca5c238692ce0e1cdcbda066fbc4f45a9b3e3fce68360609d604d6a6ecc9a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
