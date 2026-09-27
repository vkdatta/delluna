export const name="file-html-fill";
export const id="dl_bd9dcb2716a04a2a94eb";
export const url=new URL("../icons/file-html-fill.svg?v=5b60d652af823441b44f79e74116699c3c1ef6a09117afa0159b6608f53c682f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
