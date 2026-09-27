export const name="arrows-out-line-horizontal";
export const id="dl_b6c14577a23c415fb505";
export const url=new URL("../icons/arrows-out-line-horizontal.svg?v=c973518ee29fe06c71f60147f1df9ba2f8ef780c0fefeb550d9d22899873aec2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
