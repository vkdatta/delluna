export const name="user-round-cog";
export const id="dl_8104a0f83709448cb109";
export const url=new URL("../icons/user-round-cog.svg?v=b0a24f675e796aacea7336351df77092dd87fe64eeae231538ae2c59ac5f1cdb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
