export const name="bookmark_added";
export const id="dl_3e8db02086f349d17647";
export const url=new URL("../icons/bookmark_added.svg?v=127f15e8c124dcbca4fd161852cac3fd4544266189b0fa987da4a290bf192049",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
