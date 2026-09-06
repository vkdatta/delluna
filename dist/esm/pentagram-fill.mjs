export const name="pentagram-fill";
export const id="dl_50716e029be74916a72a";
export const url=new URL("../icons/pentagram-fill.svg?v=399b2a7f13bffe256a83b30ee26c342725cbc7af9ca9f06acc61f8829943cfed",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
