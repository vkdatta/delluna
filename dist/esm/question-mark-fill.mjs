export const name="question-mark-fill";
export const id="dl_0de55f2a150d4dd7b042";
export const url=new URL("../icons/question-mark-fill.svg?v=f5140a52889f8cc898fe42ad99aad896b889d0b2adae368883fe89182babb743",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
