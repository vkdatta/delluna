export const name="t-shirt-light";
export const id="dl_91147b34e3f67c37f726";
export const url=new URL("../icons/t-shirt-light.svg?v=c6b8dba1bad2d55015125799801014b2a7984430b689629532a5d85924850f5b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
