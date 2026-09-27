export const name="arrow-fat-line-up-fill";
export const id="dl_920fb623dd7148e8a154";
export const url=new URL("../icons/arrow-fat-line-up-fill.svg?v=f57733d8b37008f944efda553b4b13823fd9851258bb7e9ac0a12fcdb817fd63",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
