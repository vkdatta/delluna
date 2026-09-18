export const name="script";
export const id="dl_7d4ff7d4524643c9ab94";
export const url=new URL("../icons/S/script.svg?v=a311be47b961c4f37eca5109f723f5e0a35b936704184ba087caa4c8539d9958",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
