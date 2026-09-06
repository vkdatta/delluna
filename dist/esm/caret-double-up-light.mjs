export const name="caret-double-up-light";
export const id="dl_06fd1885a54d48cbb40c";
export const url=new URL("../icons/caret-double-up-light.svg?v=757b29c90ab6cd1403aa8eb9a54a870f4926210c3fa511a8a2983897b2f91777",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
