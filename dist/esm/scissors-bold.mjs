export const name="scissors-bold";
export const id="dl_950f30f7bca42073d0d5";
export const url=new URL("../icons/scissors-bold.svg?v=ff9f1edd8a2fb6b0bf111aa99a0ad65889a88624586dd90647522eb6a1ed846d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
