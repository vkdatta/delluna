export const name="linux-logo-bold";
export const id="dl_ab5a5bf23cd14449a6c9";
export const url=new URL("../icons/linux-logo-bold.svg?v=100c1d835b02f33499e69bcefd03e228b322157164f3a7aebf424c63b1424881",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
