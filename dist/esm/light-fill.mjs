export const name="light-fill";
export const id="dl_5cd836356d8f602f6f93";
export const url=new URL("../icons/light-fill.svg?v=26df44baf041c9c0b1b1bd57b7e5291669590d7d0ae893fcb51ed4de041ce613",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
