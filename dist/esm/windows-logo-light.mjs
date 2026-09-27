export const name="windows-logo-light";
export const id="dl_a92500e703fda0ae22af";
export const url=new URL("../icons/windows-logo-light.svg?v=a727f4bdef3af48c279827869ef2b8a5356a90fce6c74238d7a27d12a3161bd6",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
