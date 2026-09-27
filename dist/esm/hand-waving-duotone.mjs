export const name="hand-waving-duotone";
export const id="dl_99b61f1f274b41e2962f";
export const url=new URL("../icons/hand-waving-duotone.svg?v=3b3b93d64bbaed20c9d8555aa58791208962154caf11e91b627ec92e9206e2f2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
