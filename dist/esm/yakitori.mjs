export const name="yakitori";
export const id="dl_a625460eab39682aec1f";
export const url=new URL("../icons/yakitori.svg?v=bbc97febbb1a307e5a030b00f82260dffa0b6b2a9e8cf3e335f779fbcdeda0ec",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
