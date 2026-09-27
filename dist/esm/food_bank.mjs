export const name="food_bank";
export const id="dl_e91acf40220d1541dc2c";
export const url=new URL("../icons/food_bank.svg?v=6e3f6a476f4b872f612d7c2f167f3c80f0b87a452eb9b0bc0ffc220575476609",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
