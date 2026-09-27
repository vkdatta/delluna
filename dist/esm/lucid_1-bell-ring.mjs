export const name="lucid_1-bell-ring";
export const id="dl_f0dc68f45a844a79b537";
export const url=new URL("../icons/lucid_1-bell-ring.svg?v=a340669b66bdae909605ce2939237beed9967f3de8c9a1e930d268f3e61ab388",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
