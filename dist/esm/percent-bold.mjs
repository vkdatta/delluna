export const name="percent-bold";
export const id="dl_b887029f1b0c404f8884";
export const url=new URL("../icons/percent-bold.svg?v=0f528d71e11fab25a885f71e2760d59566103f580087d9ede5e3e43f1c79fbb4",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
