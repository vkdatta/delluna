export const name="hand_gesture";
export const id="dl_16e5d6790d5e4bbc8422";
export const url=new URL("../icons/hand_gesture.svg?v=1497e1fb6f5595db713e4e99cf02e44658459b88fad930fa6e6319050ab276b8",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
