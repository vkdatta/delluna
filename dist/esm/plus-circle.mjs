export const name="plus-circle";
export const id="dl_9b54ca5f5d064e3bb206";
export const url=new URL("../icons/plus-circle.svg?v=1106953ef2de702dc5851999d3891cdb6906a0e62e1444e1b822a4aab57a835b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
