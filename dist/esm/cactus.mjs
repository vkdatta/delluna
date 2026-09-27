export const name="cactus";
export const id="dl_bcc19d53df6a4347a1d6";
export const url=new URL("../icons/cactus.svg?v=0fb3974f69776b9587816afada994732d603e6c7b8d0f4799520c32aeb5ffb5e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
