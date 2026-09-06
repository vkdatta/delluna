export const name="rabbit-light";
export const id="dl_c8ffb35eecc245ddafbb";
export const url=new URL("../icons/rabbit-light.svg?v=0a4c5d9470d610e1e4e7399b767a020136074e1810c2b70de3a4c168c0720f4a",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
