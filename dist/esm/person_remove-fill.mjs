export const name="person_remove-fill";
export const id="dl_198619a2fdb97f8b7972";
export const url=new URL("../icons/person_remove-fill.svg?v=db8f2caef62242994473092336b0a23179bcd84b084b844bdbcafa8634503a93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
