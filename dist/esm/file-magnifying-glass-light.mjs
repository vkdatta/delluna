export const name="file-magnifying-glass-light";
export const id="dl_7d5a37b943254f399e23";
export const url=new URL("../icons/file-magnifying-glass-light.svg?v=e70d1913858b8e763739c80d5e9830d7483c32c46cca13dd83084a98cf82fb88",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
