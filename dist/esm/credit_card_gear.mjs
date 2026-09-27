export const name="credit_card_gear";
export const id="dl_9b1cbb709dc476692853";
export const url=new URL("../icons/credit_card_gear.svg?v=f01bd1ee41f209c1f3390c9be110e12071edb565c001bcf79d9040b4a4367301",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
