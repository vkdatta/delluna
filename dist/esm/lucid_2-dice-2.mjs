export const name="lucid_2-dice-2";
export const id="dl_c2b9a726304447db8068";
export const url=new URL("../icons/lucid_2-dice-2.svg?v=7a2e03c0006e4e03e1043d24af1e33b10e0eec90e140b59f5eb9dc756bc63625",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
