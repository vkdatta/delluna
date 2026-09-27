export const name="seat-bold";
export const id="dl_0e5e553466c720f1b699";
export const url=new URL("../icons/seat-bold.svg?v=8f1c49c7c150578b043cb85828096d090537efbe15363fffb218e0d70ec52457",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
