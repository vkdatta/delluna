export const name="signpost-light";
export const id="dl_1af362979f7248b73ff1";
export const url=new URL("../icons/signpost-light.svg?v=e480aa7a6c168d12e52c125a7cd67e603fc581db532f4d2308fb6235bcd57655",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
