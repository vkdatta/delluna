export const name="lucid_3-paper-bag";
export const id="dl_9dca327fd5d64a69a373";
export const url=new URL("../icons/lucid_3-paper-bag.svg?v=dc493c229c0ce00c7dbe83eb3078fec5beb5e503817ec945b3786b651d983d19",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
