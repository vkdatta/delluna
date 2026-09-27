export const name="butterfly";
export const id="dl_a3224e73f0474227b63e";
export const url=new URL("../icons/butterfly.svg?v=3eec197a2b5ab1a83eef36475966a497aca2590a46472161109a39a1dedfb9d2",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
