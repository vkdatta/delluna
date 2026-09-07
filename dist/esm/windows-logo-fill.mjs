export const name="windows-logo-fill";
export const id="dl_9d353d4bed0147d88a88";
export const url=new URL("../icons/W/windows-logo-fill.svg?v=7a045cbb64bc1f714c4e1d2d16fcb39923d2f7da8bd943126b3cd29bf04a5771",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
