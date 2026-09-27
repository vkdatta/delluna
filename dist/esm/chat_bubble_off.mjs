export const name="chat_bubble_off";
export const id="dl_d93d1040c17c5e3c5e49";
export const url=new URL("../icons/chat_bubble_off.svg?v=1d2cf48f1145cec23cbd19cb7de2046e36864f10bf0598f2eaf0d79ba14c4443",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
