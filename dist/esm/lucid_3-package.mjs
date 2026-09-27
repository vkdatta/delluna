export const name="lucid_3-package";
export const id="dl_7c9a0625c7764692a50a";
export const url=new URL("../icons/lucid_3-package.svg?v=2203c19b0b62f26631d9f836c803f3df6166ab0fe8718741b015060728a9740c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
