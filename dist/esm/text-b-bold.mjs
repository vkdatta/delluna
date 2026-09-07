export const name="text-b-bold";
export const id="dl_52cccba2e654495eb061";
export const url=new URL("../icons/T/text-b-bold.svg?v=96f2d8e33cb9871c4d0a9ca477f0225e249b45bcb45ea837df42b69be51b201f",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
