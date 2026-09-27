export const name="shield_with_heart";
export const id="dl_6775cbb426a5799b287e";
export const url=new URL("../icons/shield_with_heart.svg?v=fa58cadcb0fd0006cfdc2d26413433a217c0758ac042528c4b9fb38679e62fb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
