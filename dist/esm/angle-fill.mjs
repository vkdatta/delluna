export const name="angle-fill";
export const id="dl_02607e362f3c418b8694";
export const url=new URL("../icons/angle-fill.svg?v=4d0a048af15bfb59c0987b007c9dd9d02eec6bca5518fcb21a89e714daeeffed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
