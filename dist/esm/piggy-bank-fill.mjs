export const name="piggy-bank-fill";
export const id="dl_beafec7272d745ab948b";
export const url=new URL("../icons/piggy-bank-fill.svg?v=5c6958d4a302538ca70df3664c905e05ddb7762e3f7cd72f6c5ab65f0ccdc3df",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
