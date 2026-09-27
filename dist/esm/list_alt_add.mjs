export const name="list_alt_add";
export const id="dl_d07263ea822a1efe3173";
export const url=new URL("../icons/list_alt_add.svg?v=f45085dbd7a1ad4601195a574a11c949f0953ab7e5800f869a4f1f16a4864f2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
