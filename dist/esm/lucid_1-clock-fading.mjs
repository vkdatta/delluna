export const name="lucid_1-clock-fading";
export const id="dl_3b23f9a86e7745caa0e1";
export const url=new URL("../icons/lucid_1-clock-fading.svg?v=22db17e1a92142ca2362042d5b3888d965e2c3c6658f66d595f8ea6d4d2a09ff",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
