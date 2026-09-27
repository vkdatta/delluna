export const name="sigma-bold";
export const id="dl_06c2ab53bbb471cce9de";
export const url=new URL("../icons/sigma-bold.svg?v=581a96df07947e665f797fe28fb47ce5551a77e20aa9dc2fe73a78896eae1edd",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
