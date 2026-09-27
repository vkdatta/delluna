export const name="arrow-bend-double-up-left-thin";
export const id="dl_bbb8feed7e0346e8bda4";
export const url=new URL("../icons/arrow-bend-double-up-left-thin.svg?v=a77668e466cbf85945a66f8c30a1a86ecb228f0e4c6e4eaee0b7cfa03d15c50f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
