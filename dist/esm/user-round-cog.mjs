export const name="user-round-cog";
export const id="dl_8104a0f83709448cb109";
export const url=new URL("../icons/user-round-cog.svg?v=d27919e9085d56819f7d6b33a95176773bab5ad1c71d014c3cd1fc4f1fa6e5d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
