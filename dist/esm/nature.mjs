export const name="nature";
export const id="dl_23f9df32549ad0ed7dce";
export const url=new URL("../icons/nature.svg?v=cb428ee15326fb54031806d12e5062c063062a40d9746ef74b7378830ffc4a06",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
