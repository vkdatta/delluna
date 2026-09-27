export const name="calendar-check-bold";
export const id="dl_a02657fcf3f44239af16";
export const url=new URL("../icons/calendar-check-bold.svg?v=35e05e104c53550b32eaa16df378ba01d2857b4d112f61253d474e3756d9fa52",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
