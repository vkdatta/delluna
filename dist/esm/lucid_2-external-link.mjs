export const name="lucid_2-external-link";
export const id="dl_0ce48f8d80cb4e6b85b0";
export const url=new URL("../icons/lucid_2-external-link.svg?v=89e62fe76b6caefa22f89bfb93e30deda6a7d9834dc36d815dc76df4ab9b308d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
