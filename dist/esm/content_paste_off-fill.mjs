export const name="content_paste_off-fill";
export const id="dl_9f7e91ae8a10040cf344";
export const url=new URL("../icons/content_paste_off-fill.svg?v=69169871c6396e76f7323ec3541ebce0b6d52a52b549c9ce97a7707cfe1e3c5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
