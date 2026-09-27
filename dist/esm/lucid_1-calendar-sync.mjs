export const name="lucid_1-calendar-sync";
export const id="dl_b7b80099476c4505a0ee";
export const url=new URL("../icons/lucid_1-calendar-sync.svg?v=5ed05d3f50f1558a0ca094831ecb6d4c64b0875529fa3616ae4505d5df81b08c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
