export const name="unarchive-fill";
export const id="dl_1e5d50c964392ed12795";
export const url=new URL("../icons/unarchive-fill.svg?v=ab8cbbc5c9434aade4f8675282516664a49e3bc02017cd60acb3153e257aa43f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
