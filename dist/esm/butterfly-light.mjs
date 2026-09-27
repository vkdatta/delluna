export const name="butterfly-light";
export const id="dl_6475e7df7a694ab8bf03";
export const url=new URL("../icons/butterfly-light.svg?v=b727d38f2a74bee81d3b3b45bd5531e5beb6fc197117accdb64e8603e01833fe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
