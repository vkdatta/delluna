export const name="bird-thin";
export const id="dl_973c93e539054083b184";
export const url=new URL("../icons/bird-thin.svg?v=10e79eaa8cda3fbdb604792d12d516e6e243a542c56288b694b35510021a89be",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
