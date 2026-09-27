export const name="credit_card_off";
export const id="dl_e2a2b6a8faf55495ff11";
export const url=new URL("../icons/credit_card_off.svg?v=86461d9ddb0281cc848510de27979a7c1370ae1476311986ae1811bdb4060f8f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
