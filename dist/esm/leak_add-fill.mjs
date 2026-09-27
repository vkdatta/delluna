export const name="leak_add-fill";
export const id="dl_9769c82306159e6798da";
export const url=new URL("../icons/leak_add-fill.svg?v=116bc749ac37387b8050f7695a4b7d3f815488b42da35e37c2b026589c43d92a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
