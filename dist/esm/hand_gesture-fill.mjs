export const name="hand_gesture-fill";
export const id="dl_7c2d97f0b4e75b92363c";
export const url=new URL("../icons/hand_gesture-fill.svg?v=c7e3796d4f1009a147f042e03e8e66084c30512c7903b7c85872c8364dc5ff68",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
