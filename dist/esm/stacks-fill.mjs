export const name="stacks-fill";
export const id="dl_4859af5a16cc32e9b298";
export const url=new URL("../icons/stacks-fill.svg?v=13020bcf453435dc57cd7fe413a2b3bcad0e4f3ae35c33c89f40b5bc696352d3",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
