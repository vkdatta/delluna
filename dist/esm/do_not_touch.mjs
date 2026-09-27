export const name="do_not_touch";
export const id="dl_14f5562bc5b7aa751c8c";
export const url=new URL("../icons/do_not_touch.svg?v=86b6f73a8612309709570ccbec061e959c0f7c453ddc0aecebaed8cf456b7cd3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
