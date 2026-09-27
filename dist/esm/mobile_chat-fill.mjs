export const name="mobile_chat-fill";
export const id="dl_8e16191d24e803401116";
export const url=new URL("../icons/mobile_chat-fill.svg?v=772421e2d0c549d70b82966ddde642e6444ced25dd16f14834aad1b3e875aa75",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
