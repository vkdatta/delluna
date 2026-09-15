export const name="counter_0";
export const id="dl_07e191eba1394d7cbcc0";
export const url=new URL("../icons/C/counter_0.svg?v=127dfc39e6b05ec27484642c911114aeff67790a45d6afd9dbed695b04dad36a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
