export const name="mapping";
export const id="dl_d604c30bd0b54572ba74";
export const url=new URL("../icons/mapping.svg?v=ab6f2c98d29e02535cb8cc62308c9bf135c761d4860b3a2d99e676d07788d8be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
