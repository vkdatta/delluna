export const name="text_snippet-fill";
export const id="dl_b8afc2867c6ac8677726";
export const url=new URL("../icons/text_snippet-fill.svg?v=fb946497be51bbf12d950cb5b9842006567ef6ff16ac08a3ea3c64282eec63bc",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
