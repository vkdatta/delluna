export const name="swipe_left_2";
export const id="dl_0b356af1570917cf2a82";
export const url=new URL("../icons/swipe_left_2.svg?v=3527edd935b0f0a3912df8ad6e831ea964ea1a6d4e9bcadaecfcef7de6c4e26c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
