export const name="data_loss_prevention";
export const id="dl_37e93e07cc1a13502084";
export const url=new URL("../icons/data_loss_prevention.svg?v=02ab204712afd03f501e7f927ece32628c734cf05282e54a4dee011e87cd8c26",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
