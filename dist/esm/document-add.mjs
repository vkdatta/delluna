export const name="document-add";
export const id="dl_be2319cfe512ba9126b7";
export const url=new URL("../icons/document-add.svg?v=ce65c2d0704c772efee82146050b7bde74880edaac4c78c1f2fd9c162013c099",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
