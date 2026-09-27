export const name="gamepad_left-fill";
export const id="dl_9439c50ff5166974d9de";
export const url=new URL("../icons/gamepad_left-fill.svg?v=f74f02a9c38bc0379bdb8d5946d12158b691dc71c6820f13808224ac72be658c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
