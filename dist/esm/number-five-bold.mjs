export const name="number-five-bold";
export const id="dl_9d026d0d8d5d4643b2b5";
export const url=new URL("../icons/number-five-bold.svg?v=4f41e91b4210de54cd71b8994f690033cb5215a671a0b62be617a62530fc4718",import.meta.url).href;
export async function svg(){return fetch(url).then(r=>{if(!r.ok)throw new Error(`Delluna icon fetch failed: HTTP ${r.status}`);return r.text()})}
const icon={name,id,url,svg};
export default icon;
