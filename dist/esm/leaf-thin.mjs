export const name="leaf-thin";
export const id="dl_c47abca6229b485f8f0f";
export const url=new URL("../icons/leaf-thin.svg?v=1c6a11c55ad8afd0e09ec509c3d5d255bef1fa3e1aa2e0ee94c1c2e8dced3fbe",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
