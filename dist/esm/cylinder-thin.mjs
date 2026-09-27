export const name="cylinder-thin";
export const id="dl_324344421e9546d4a181";
export const url=new URL("../icons/cylinder-thin.svg?v=f1039fd04d01bcdaf259c0be0bcbc9e698fd83ad13450e8e8615cbcc17791bb1",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
