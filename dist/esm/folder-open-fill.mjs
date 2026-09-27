export const name="folder-open-fill";
export const id="dl_06c74b0cb3af4c95a10c";
export const url=new URL("../icons/folder-open-fill.svg?v=215f166bfc7ea5556bd319d5ca080a4f43d42035556a23be123a87f6fb44883b",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
