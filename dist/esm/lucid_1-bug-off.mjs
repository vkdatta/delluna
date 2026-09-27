export const name="lucid_1-bug-off";
export const id="dl_4ff188a8227e45f496a1";
export const url=new URL("../icons/lucid_1-bug-off.svg?v=c874b43bf8d02bde3494a196d80de080c3285912fb235e6fb9c4095c7014d7b7",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
