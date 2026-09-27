export const name="square-parking-off";
export const id="dl_283f7da5408a4df0a763";
export const url=new URL("../icons/square-parking-off.svg?v=5abf0a28951f3bc75a56c9ca14a9b079e30f534859eb4391c65acae3463f934e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
