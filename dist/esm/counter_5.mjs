export const name="counter_5";
export const id="dl_8e960a869d5d4b2cb89c";
export const url=new URL("../icons/C/counter_5.svg?v=0e88f7c689fdded065b8f924fd9d932ff8ef7fba17b85a167a1e124da1ca5aae",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
