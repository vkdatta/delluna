export const name="lucid_1-chevrons-left-right";
export const id="dl_b2fd1af1176e4b199c6b";
export const url=new URL("../icons/lucid_1-chevrons-left-right.svg?v=34a8a60840b49873e36aa1630759a5314a8778540648e6de8d9abfe879b960fc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
