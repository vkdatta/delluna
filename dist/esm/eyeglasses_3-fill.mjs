export const name="eyeglasses_3-fill";
export const id="dl_0828efdb6a0940cfb064";
export const url=new URL("../icons/eyeglasses_3-fill.svg?v=f20b331cea635093233e1c9ce5dd757d375e9b9de0cac63375d5e3acc0f57661",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
