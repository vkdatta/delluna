export const name="copy-bold";
export const id="dl_3166dabb25414b8c805c";
export const url=new URL("../icons/copy-bold.svg?v=abe47c4ffa4a8be52fa3dbe3eb14a2a786c11c936feef94d62052502a898ea9b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
