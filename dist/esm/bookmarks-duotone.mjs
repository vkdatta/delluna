export const name="bookmarks-duotone";
export const id="dl_0bb19107cbdd40dc909c";
export const url=new URL("../icons/bookmarks-duotone.svg?v=2740dd1a844f92a6d05e2774b0249a3758be045bd6a8ac2ada7c9caa233f22bd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
