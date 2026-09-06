export const name="user-round-cog";
export const id="dl_8104a0f83709448cb109";
export const url=new URL("../icons/user-round-cog.svg?v=366e2c0ddd142a19b1734c42588fe27166a51506d60d60270a6ef8338ea8d7b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
