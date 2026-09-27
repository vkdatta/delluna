export const name="letter-circle-v-light";
export const id="dl_c5d3f18359244906850c";
export const url=new URL("../icons/letter-circle-v-light.svg?v=9cde38dd677ef8dad67521006c5cd6e7b0481ef1c3bdb6f2626f45889449a725",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
