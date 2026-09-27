export const name="page_info-fill";
export const id="dl_34c8fcd0c06658682f37";
export const url=new URL("../icons/page_info-fill.svg?v=377978c9fb841c48a4e24827c922b530ef3f5c34221b807a83c7ae1efcfff526",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
