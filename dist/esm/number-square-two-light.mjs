export const name="number-square-two-light";
export const id="dl_42ddc757689d478ba190";
export const url=new URL("../icons/number-square-two-light.svg?v=0cf3d381df6cb502d89314af1460dc5c372a1c0b10098c59ff2efd67875d2d7a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
