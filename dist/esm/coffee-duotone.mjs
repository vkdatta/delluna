export const name="coffee-duotone";
export const id="dl_83c042150f5340aebd88";
export const url=new URL("../icons/coffee-duotone.svg?v=268cf799401d11df9b8c9d37de91b11474cd23695473012dd5c2bfd86d413715",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
