export const name="push-pin-simple-duotone";
export const id="dl_3c4bac22ea364cf68f04";
export const url=new URL("../icons/push-pin-simple-duotone.svg?v=7d301f4938179d624d54bd14140f4e2ea2f5904caa453276c83ab7844c30df81",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
