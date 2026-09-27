export const name="lucid_2-dice-6";
export const id="dl_4b030d550ddc4536901c";
export const url=new URL("../icons/lucid_2-dice-6.svg?v=f5fc46b1a4ecffec605e4951980207f528a0a8350f90637a991dedf98ec15e5d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
