export const name="coat-hanger";
export const id="dl_67faea8f02514ebab014";
export const url=new URL("../icons/coat-hanger.svg?v=61e1c49bc389fadefa0bc402d7f49c558e79583fb623e20a97e06f92685628b5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
