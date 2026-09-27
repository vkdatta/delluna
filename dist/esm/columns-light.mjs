export const name="columns-light";
export const id="dl_ef6ba0272cb048d59f4b";
export const url=new URL("../icons/columns-light.svg?v=9ac96baf523d0521c88fa6e84541fd41554b8a7db4823e4b5022e9407b43780c",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
