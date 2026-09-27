export const name="tree-fill";
export const id="dl_42f46f520a2d8f231dbe";
export const url=new URL("../icons/tree-fill.svg?v=0a97408c5c6a708279488ae3cab851d073742908d8a9be9fcbf8b93d6ec05270",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
