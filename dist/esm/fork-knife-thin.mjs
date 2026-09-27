export const name="fork-knife-thin";
export const id="dl_4bc8a1e443d64483b3cb";
export const url=new URL("../icons/fork-knife-thin.svg?v=ce415261509b775f7b177595beebbd1fa82866eb689b50edd5a5dfd7bbdcc4ba",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
