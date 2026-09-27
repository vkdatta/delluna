export const name="exclude-square-duotone";
export const id="dl_bcee857fae4b473a88fa";
export const url=new URL("../icons/exclude-square-duotone.svg?v=dd925d71b48a6894c14255222a5a391560dec057256ae8692a74656c696d6e2b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
