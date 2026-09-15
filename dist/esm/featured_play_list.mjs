export const name="featured_play_list";
export const id="dl_9ba07e6665e749b1bea8";
export const url=new URL("../icons/F/featured_play_list.svg?v=c67a4bcba8892cdbcb6243f0ee21740e8a3017da3879ecaa889f5e4f1737268d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
