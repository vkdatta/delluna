export const name="sunset";
export const id="dl_bdd1bed5768240b9ada5";
export const url=new URL("../icons/sunset.svg?v=35f47179fdef39fd863cc30f22271f6f3778c19e6fb120709b887ec8b1e54e47",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
