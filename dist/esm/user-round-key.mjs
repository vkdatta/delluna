export const name="user-round-key";
export const id="dl_fe4d5d0045d64fd9a895";
export const url=new URL("../icons/user-round-key.svg?v=fa69f979de5299b4fcb90d53fc41a7bff822880f3d64554e69f88c6acecb719c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
