export const name="groups_2";
export const id="dl_36699efb4e467ebad998";
export const url=new URL("../icons/groups_2.svg?v=c16292c75f4305f92350cf1bb4b11608726e2164a55f509393474211f37ea6db",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
