export const name="humidity_high";
export const id="dl_1b66df48c693763531db";
export const url=new URL("../icons/humidity_high.svg?v=06cae7bc3a30a16ca7986d5bd23800c036503d49743976f40a105af07e48e462",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
