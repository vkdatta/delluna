export const name="grocery-fill";
export const id="dl_d30f04eef3de48ca870d";
export const url=new URL("../icons/G/grocery-fill.svg?v=386b867a853c036709961ebbcf9c9a7d488b54063e13f99dae5ec511ceb43d6a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
