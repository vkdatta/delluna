export const name="diamond-close";
export const id="dl_96da949303e4e385cb0f";
export const url=new URL("../icons/diamond-close.svg?v=43d0ff77fca4992aa38886dc5c0904e110434e2cda68f96b10947936bac154d5",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
