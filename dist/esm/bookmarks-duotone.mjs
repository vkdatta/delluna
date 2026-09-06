export const name="bookmarks-duotone";
export const id="dl_0bb19107cbdd40dc909c";
export const url=new URL("../icons/bookmarks-duotone.svg?v=12b294d1a50c93d763b1bfdd691b01f45a840cadfecdf74f997bdbff9ec480f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
