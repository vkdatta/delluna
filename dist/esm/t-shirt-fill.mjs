export const name="t-shirt-fill";
export const id="dl_966cf4dfdd8243cea1a8";
export const url=new URL("../icons/T/t-shirt-fill.svg?v=c28c7d081d1a42d0ea748dc75ddab0b0278096c827a9250a04c12e7d286e7a31",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
