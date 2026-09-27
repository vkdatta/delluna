export const name="jar-label-bold";
export const id="dl_4f3e06d9544e498ebed7";
export const url=new URL("../icons/jar-label-bold.svg?v=71123e7558efc074276c922ae64ad1d429906bfbea007dd6a406b33a6effea6d",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
