export const name="door_open";
export const id="dl_8da5faa05fc2400392e6";
export const url=new URL("../icons/D/door_open.svg?v=8a59c8a6a51fc750d149626587727721f0283a6d5340779500866bfadaa0cf38",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
