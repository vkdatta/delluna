export const name="swipe_up-fill";
export const id="dl_71ae16810bcc400a9c40";
export const url=new URL("../icons/swipe_up-fill.svg?v=6d47691374c90e4591c58aba07e957513891434ab8fe3f5d8db7b97da332be63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
