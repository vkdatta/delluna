export const name="mobile_rotate_lock";
export const id="dl_79a6d4b55530b999530d";
export const url=new URL("../icons/mobile_rotate_lock.svg?v=2734de2524225b9b9c65357475c57a9a5b4eaa3e5b49b265a7fd77caf1ab8e59",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
