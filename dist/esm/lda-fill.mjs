export const name="lda-fill";
export const id="dl_15747527911ff07d7e07";
export const url=new URL("../icons/lda-fill.svg?v=b7a7cb2e997393564f4bd5fd3abbc3638e004142ab3c1f80b17e48a74efddd82",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
