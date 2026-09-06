export const name="hand-palm-light";
export const id="dl_4cef4361dee445e78c08";
export const url=new URL("../icons/hand-palm-light.svg?v=a30da642f0cba8a615153a95dbb7a7b458a74005d2d8272a79332593b2a38207",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
