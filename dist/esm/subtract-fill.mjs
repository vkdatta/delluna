export const name="subtract-fill";
export const id="dl_31b1df4401c84062b636";
export const url=new URL("../icons/S/subtract-fill.svg?v=ecec693a2da4a70f92d4c9e1864d34313fb599ad82ceca047b380e7a040dcdb2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
