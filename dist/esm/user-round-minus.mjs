export const name="user-round-minus";
export const id="dl_8eb816fcad7c4a9c9ea1";
export const url=new URL("../icons/user-round-minus.svg?v=a5314d429d55b462988e1ca82415ac0589da42157e5f8b0175c6d4c4a45c939f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
