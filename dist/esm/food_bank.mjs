export const name="food_bank";
export const id="dl_bd8f0ff7e7ed024dfb31";
export const url=new URL("../icons/food_bank.svg?v=b0637f6c5707523314dcaefe9c6b1de6e034c847d6fb0e9399ba6d388265180e",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
