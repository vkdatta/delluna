export const name="arrows-vertical-duotone";
export const id="dl_bb19b40575ad476a865f";
export const url=new URL("../icons/arrows-vertical-duotone.svg?v=345e9951a535178567f56b8bddbef1fc4afed52a0b86a21931d594238045aaef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
