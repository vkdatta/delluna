export const name="bell-slash-fill";
export const id="dl_26712cd2e3cc429ea93b";
export const url=new URL("../icons/bell-slash-fill.svg?v=b15c2b868af223b5d974003e0cb7041791f6bb9cc19b2e6fa4c9bdf04423e4f1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
