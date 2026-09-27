export const name="face-fill";
export const id="dl_18f31b6b830c39fe2ece";
export const url=new URL("../icons/face-fill.svg?v=1160a8b2cd4d7f5010c295f6ceecb3bdebb6f18839a5628b3d482688f1df207d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
