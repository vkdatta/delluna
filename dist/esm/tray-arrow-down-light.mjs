export const name="tray-arrow-down-light";
export const id="dl_b83c5fde52814d45a301";
export const url=new URL("../icons/T/tray-arrow-down-light.svg?v=cd749eb2822ff9b2f676770d4186d6696362cd2f3f4cb5411e7a168aa68b73ef",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
