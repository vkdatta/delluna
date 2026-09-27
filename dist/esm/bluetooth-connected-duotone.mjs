export const name="bluetooth-connected-duotone";
export const id="dl_3e460abea9ef49c6afd3";
export const url=new URL("../icons/bluetooth-connected-duotone.svg?v=1a889ca04bec852a6ff27e608a9b58f0ee90375d9fd6c0eba3f8b461afce27a8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
