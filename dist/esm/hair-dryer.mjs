export const name="hair-dryer";
export const id="dl_f5b78fcc7fa84fa79617";
export const url=new URL("../icons/hair-dryer.svg?v=da7e5bb443ed0e434901921638311f3cdcbd977a177479f01630dbcc4a944edf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
