export const name="counter_5";
export const id="dl_ae085387e88a78bb7c8a";
export const url=new URL("../icons/counter_5.svg?v=0e88f7c689fdded065b8f924fd9d932ff8ef7fba17b85a167a1e124da1ca5aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
