export const name="currency_yuan-fill";
export const id="dl_13dd375a1bda4d479b01";
export const url=new URL("../icons/currency_yuan-fill.svg?v=e76daa603d270869fd5d349573a80ee4d49646a15ba20c5b71a56737c90cd134",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
