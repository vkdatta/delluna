export const name="user-round-cog";
export const id="dl_8104a0f83709448cb109";
export const url=new URL("../icons/user-round-cog.svg?v=b632f12ca116a1ba5601d14dfa5c7f69c250c5540b57ce64811ab7e8262c4035",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
