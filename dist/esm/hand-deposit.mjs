export const name="hand-deposit";
export const id="dl_1b14519ceef74688b47b";
export const url=new URL("../icons/hand-deposit.svg?v=859dd017eb2e43ece8ca6cc73966b17d38255761fb87827a18286fdddf61f757",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
