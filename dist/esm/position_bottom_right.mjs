export const name="position_bottom_right";
export const id="dl_70de93a8b9b24c18b336";
export const url=new URL("../icons/position_bottom_right.svg?v=326d712f6b7a2e5a3e08c96577ee0b4ea26200516cac1f6aaa629f6e5c62b23a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
