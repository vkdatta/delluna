export const name="ear-thin";
export const id="dl_59d4ab23fa6a445383ff";
export const url=new URL("../icons/ear-thin.svg?v=5ef49d8b12fdb809d7c58efd1801f075e4a11c1ba228104909cd3ab7b65cd5bf",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
