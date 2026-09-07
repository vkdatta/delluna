export const name="user-circle-light";
export const id="dl_f6b4eba6e6ee4550b965";
export const url=new URL("../icons/U/user-circle-light.svg?v=7c76336ccc54e7f32418cd7d8ed49e2887d02d9371998a2dfb804f8967e89d62",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
