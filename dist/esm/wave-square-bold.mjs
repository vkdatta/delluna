export const name="wave-square-bold";
export const id="dl_460c9a77f5e3cdce9820";
export const url=new URL("../icons/wave-square-bold.svg?v=bbc9a02625f1b9a7392cd9c2580398c714cfc355ab56570296fc1360955cc7b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
