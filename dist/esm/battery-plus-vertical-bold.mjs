export const name="battery-plus-vertical-bold";
export const id="dl_fa38e011facf44a6bc5b";
export const url=new URL("../icons/battery-plus-vertical-bold.svg?v=3c66a72900d8753d06862eafcbc8bb7458acb7a0d0febe461cfce3147caade93",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
