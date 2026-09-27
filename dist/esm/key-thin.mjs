export const name="key-thin";
export const id="dl_b8d13e1271654d8a87df";
export const url=new URL("../icons/key-thin.svg?v=e5430c8c6a0cee322c0128e6936bda52c9198d616d87e9c13a5434c36ae211cb",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
